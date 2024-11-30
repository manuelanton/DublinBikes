import { schema } from "./schema";
import { DataType, Field, RawRow, TransformedRow } from "./types";
import _ from "lodash";

export async function schematizeData(): Promise<TransformedRow[]> {
  const rawData = await fetchRawData();
  const transformedData = mapToSchema(rawData, schema);
  return transformedData;
}

async function fetchRawData(): Promise<RawRow[]> {
  const url = "https://app-media.noloco.app/noloco/dublin-bikes.json";
  const request = await fetch(url);
  const body = await request.json();
  return body;
}

function mapToSchema(data: RawRow[], schema: Field[]): TransformedRow[] {
  return data.map((row) => {
    let mappedRow: any = {};

    schema.forEach((field) => {
      const originalValue = row[field.display as keyof RawRow];
      const camelCaseName = _.camelCase(field.display);

      switch (field.type) {
        case DataType.TEXT:
          mappedRow[camelCaseName] = String(originalValue);
          break;
        case DataType.INTEGER:
          mappedRow[camelCaseName] = parseInt(originalValue as string, 10);
          break;
        case DataType.FLOAT:
          mappedRow[camelCaseName] = parseFloat(originalValue as string);
          break;
        case DataType.DATE:
          mappedRow[camelCaseName] =
            typeof originalValue === "string" ||
            typeof originalValue === "number"
              ? new Date(originalValue)
              : null;
          break;
        case DataType.BOOLEAN:
          mappedRow[camelCaseName] =
            originalValue === "TRUE" || originalValue === true;
          break;
        case DataType.OPTION:
          mappedRow[camelCaseName] = originalValue;
          break;
        default:
          mappedRow[camelCaseName] = originalValue;
      }
    });

    return mappedRow;
  });
}

export function filterData(
  data: TransformedRow[],
  filters: {
    [key: string]: { [operator: string]: string | number | boolean };
  }
): TransformedRow[] {
  return data.filter((row) => {
    return Object.entries(filters).every(([fieldName, condition]) => {
      const fieldValue = row[fieldName];

      if (typeof condition === "object") {
        return Object.entries(condition).every(([operator, value]) => {
          if (operator === "eq") {
            return fieldValue === value;
          }

          if (
            (operator === "lt" || operator === "gt") &&
            typeof fieldValue === "number" &&
            typeof value === "number"
          ) {
            return operator === "lt" ? fieldValue < value : fieldValue > value;
          }

          return false;
        });
      }

      return false;
    });
  });
}

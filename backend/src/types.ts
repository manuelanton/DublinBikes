export interface RawRow {
  id: number;
  "Harvest Time (UTC)": string | null;
  "Station id": number;
  "Available Bike-Stands": number;
  "Bike-Stands": number;
  "Available Bikes": number;
  banking: string;
  bonus: boolean;
  "Last Update": string;
  status: string;
  Address: string;
  name: string;
  latitude: number | null;
  longitude: number | null;
}

export interface TransformedRow {
  [key: string]: string | number | boolean | Date | null;
}

export interface Field {
  display: string;
  name: string;
  type: DataType;
  options: Option[];
}

export enum DataType {
  TEXT,
  INTEGER,
  FLOAT,
  DATE,
  BOOLEAN,
  OPTION,
}

type Option = "OPEN" | "CLOSED";

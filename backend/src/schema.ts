import { DataType, Field } from "./types";

export const schema: Field[] = [
  { display: "id", name: "id", type: DataType.INTEGER, options: [] },
  {
    display: "Harvest Time (UTC)",
    name: "harvestTimeUtc",
    type: DataType.DATE,
    options: [],
  },
  {
    display: "Station id",
    name: "stationId",
    type: DataType.INTEGER,
    options: [],
  },
  {
    display: "Available Bike-Stands",
    name: "availableBikeStands",
    type: DataType.INTEGER,
    options: [],
  },
  {
    display: "Bike-Stands",
    name: "bikeStands",
    type: DataType.INTEGER,
    options: [],
  },
  {
    display: "Available Bikes",
    name: "availableBikes",
    type: DataType.INTEGER,
    options: [],
  },
  {
    display: "banking",
    name: "banking",
    type: DataType.BOOLEAN,
    options: [],
  },
  { display: "bonus", name: "bonus", type: DataType.BOOLEAN, options: [] },
  {
    display: "Last Update",
    name: "lastUpdate",
    type: DataType.DATE,
    options: [],
  },
  {
    display: "status",
    name: "status",
    type: DataType.OPTION,
    options: ["OPEN", "CLOSED"],
  },
  { display: "Address", name: "address", type: DataType.TEXT, options: [] },
  { display: "name", name: "name", type: DataType.TEXT, options: [] },
  {
    display: "latitude",
    name: "latitude",
    type: DataType.FLOAT,
    options: [],
  },
  {
    display: "longitude",
    name: "longitude",
    type: DataType.FLOAT,
    options: [],
  },
];

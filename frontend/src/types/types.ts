export interface Filter {
  [key: string]: { [operator: string]: string | number | boolean };
}

export interface TransformedRow {
  id: number;
  harvestTimeUtc: string | null;
  stationId: number;
  availableBikeStands: number;
  bikeStands: number;
  availableBikes: number;
  banking: boolean;
  bonus: boolean;
  lastUpdate: string;
  status: string;
  address: string;
  name: string;
  latitude: number | null;
  longitude: number | null;
}

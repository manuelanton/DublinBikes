import React, { useState } from "react";

import { fetchData } from "./services/api";
import FilterForm from "./components/FilterForm";
import DataTable from "./components/DataTable";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const fields = [
    "id",
    "harvestTimeUtc",
    "stationId",
    "availableBikeStands",
    "bikeStands",
    "availableBikes",
    "banking",
    "bonus",
    "lastUpdate",
    "status",
    "address",
    "name",
    "latitude",
    "longitude",
  ];

  const operators = ["gt", "lt", "eq"];

  const handleFilterSubmit = async (filters: {
    where: { [key: string]: any };
  }) => {
    setFilters(filters);
    const response = await fetchData(filters);
    setData(response);
  };

  return (
    <div className="App">
      <FilterForm
        fields={fields}
        operators={operators}
        onSubmit={handleFilterSubmit}
      />
      <DataTable data={data} />
    </div>
  );
};

export default App;

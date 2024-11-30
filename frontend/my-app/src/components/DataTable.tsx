import React from "react";
import "../styles/Table.css";

interface DataTableProps {
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="data-table-container">
      <h2>Data:</h2>
      {data.length === 0 ? (
        <p>No data available for the applied filters.</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Available Bikes</th>
              <th>Available Bike Stands</th>
              <th>Status</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.availableBikes}</td>
                <td>{item.availableBikeStands}</td>
                <td>{item.status}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;

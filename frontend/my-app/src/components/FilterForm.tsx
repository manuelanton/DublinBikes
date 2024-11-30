import React, { useState } from "react";
import "../styles/Form.css";

interface FilterFormProps {
  fields: string[];
  operators: string[];
  onSubmit: (filters: { where: { [key: string]: any } }) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({
  fields,
  operators,
  onSubmit,
}) => {
  const [filters, setFilters] = useState<
    { fieldName: string; operator: string; value: string }[]
  >([]);

  const handleAddFilter = () => {
    setFilters([...filters, { fieldName: "", operator: "", value: "" }]);
  };

  const handleRemoveFilter = (index: number) => {
    const newFilters = filters.filter((_, i) => i !== index);
    setFilters(newFilters);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newFilters = [...filters];
    newFilters[index] = { ...newFilters[index], [name]: value };
    setFilters(newFilters);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const where: { [key: string]: any } = {};

    filters.forEach((filter) => {
      if (filter.fieldName && filter.value) {
        if (filter.fieldName === "status") {
          where[filter.fieldName] = { eq: filter.value };
        } else if (filter.operator && filter.value) {
          const value = isNaN(Number(filter.value))
            ? filter.value
            : Number(filter.value);
          where[filter.fieldName] = { [filter.operator]: value };
        }
      }
    });

    onSubmit({ where });
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      {filters.map((filter, index) => (
        <div key={index} className="filter">
          <div className="filter-inputs">
            <div className="filter-field">
              <label>Field:</label>
              <select
                name="fieldName"
                value={filter.fieldName}
                onChange={(e) => handleInputChange(e, index)}
              >
                <option value="">Select Field</option>
                {fields.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-operator">
              <label>Operator:</label>
              <select
                name="operator"
                value={filter.operator}
                onChange={(e) => handleInputChange(e, index)}
                disabled={filter.fieldName === "status"}
              >
                <option value="">Select Operator</option>
                {operators.map((operator) => (
                  <option key={operator} value={operator}>
                    {operator}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-value">
              <label>Value:</label>
              <input
                type="text"
                name="value"
                value={filter.value}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="Enter value"
              />
            </div>
          </div>
          <button
            type="button"
            className="remove-filter"
            onClick={() => handleRemoveFilter(index)}
          >
            Remove
          </button>
          <hr />
        </div>
      ))}
      <button type="button" onClick={handleAddFilter} className="add-filter">
        Add Filter
      </button>
      <button type="submit" className="submit-filter">
        Apply Filters
      </button>
    </form>
  );
};

export default FilterForm;

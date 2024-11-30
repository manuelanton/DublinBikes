import express from "express";
import cors from "cors";
import { filterData, schematizeData } from "./utils";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/schema", async (req, res) => {
  try {
    const transformedData = await schematizeData();
    res.json(transformedData);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch or transform data." });
  }
});

app.post("/data", async (req, res) => {
  const filters = req.body.where;
  try {
    const rawData = await schematizeData();
    const filteredData = filterData(rawData, filters);
    res.json(filteredData);
  } catch (error) {
    res.status(500).send("Error applying filters to data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

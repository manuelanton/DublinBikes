export async function fetchData(filters: { [key: string]: any }) {
  const response = await fetch("http://localhost:3001/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(filters),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

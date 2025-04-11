import express from "express";
const app = express();

// Define a simple route
app.get("/", (req, res) => {
  res.send("Server is running on port 5000");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

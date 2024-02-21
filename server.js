const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// main routes
app.get("/", (req, res) => {
  res.send("This is Main Routes!");
});

// routes definition
const kampusControllers = require("./app/controllers/kampusControllers");

// endpoints
app.get("/api/v1/mahasiswa", kampusControllers.getAll);
app.get("/api/v1/mahasiswa/:id", kampusControllers.getById);
app.get("/api/v1/dosen", kampusControllers.getByFakultas);
app.post("/api/v1/mahasiswa", kampusControllers.createMhs);
app.post("/api/v1/mahasiswa/and/dosen", kampusControllers.createMhsAndDosen);
app.put("/api/v1/mahasiswa/:id", kampusControllers.update);
app.delete("/api/v1/mahasiswa/:id", kampusControllers.delete);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

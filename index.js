import express from "express";
import cors from "cors";
import pool from "./database.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/prevencion", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM prevencion");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en consulta a la BD" });
  }
});

app.get("/ejercicios", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ejercicios");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en consulta a la BD" });
  }
});

app.get("/alimentos", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM alimentos");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en consulta a la BD" });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

import express from "express";
import cors from "cors";
import pool from "./database.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/data", async (req, res) => {
  try {
    const ejercicios = await pool.query("SELECT * FROM ejercicios");
    const medidas = await pool.query("SELECT * FROM prevencion");
    res.json({
      ejercicios: ejercicios[0],
      prevencion: medidas[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en consulta a la BD" });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

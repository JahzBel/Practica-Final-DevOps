const express = require("express");
const app = express();
const PORT = process.env.PORT || 3024;

app.get("/", (req, res) => {
  res.send("Hola Mundo DevOps 🚀, desde la practica final por Jahzeel Benzan!");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app; // export para pruebas

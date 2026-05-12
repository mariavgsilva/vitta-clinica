const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Clínica Vitta funcionando"
  });
});

app.get("/teste", (req, res) => {
  res.json({
    nome: "Clínica Vitta",
    status: "Conexão funcionando"
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

app.post("/cadastro", (req, res) => {

  console.log(req.body);

  res.json({
    message: "Usuário cadastrado com sucesso"
  });

});
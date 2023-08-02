import { Signale } from "signale";
import express from "express";
import { clienteRouter } from "./Clientes/infrastructure/ClientesRouter";

const app = express();
const signale = new Signale();
app.use(express.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use("/cliente", clienteRouter);

const port = 3000;

app.listen(port, () => {
  signale.success("Server online in port 3000");
});

import express from 'express';
import { Signale } from 'signale';
import { clienteRouter } from './Clientes/infrastructure/ClientesRouter';
import { adminRouter } from './Asesor/infrastructure/AsesorRouter';
import { gastosRouter } from './Gastos/infrastructure/ClientesRouter';
require('dotenv').config();

const app = express();
const signale = new Signale();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/cliente', clienteRouter);
app.use('/asesor', adminRouter);
app.use('/gastos', gastosRouter)

const port = 3000;
app.listen(port, () => {
  signale.success(`Server online on port ${port}`);
});

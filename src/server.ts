import express from 'express';
import { clienteRouter } from './Clientes/infrastructure/ClientesRouter';
import { Signale } from 'signale';
import { adminRouter } from './Admin/infrastructure/ClientesRouter';
require('dotenv').config();
const bucketName = process.env.AWS_S3_BUCKET_NAME;
console.log(`Bucket Name: ${bucketName}`);  // Debe imprimir el nombre de tu bucket

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
app.use('/admin', adminRouter)

const port = 3000;
app.listen(port, () => {
  signale.success(`Server online on port ${port}`);
});

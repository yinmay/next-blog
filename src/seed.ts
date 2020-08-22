import 'reflect-metadata';
import { createConnection } from 'typeorm';

createConnection()
  .then(async (connection) => {
    connection.close();
  })
  .catch((error: any) => console.log(1111111111, error));

//const PORT = process.env.PORT;
//const LOCALHOST = process.env.LOCALHOST;
 
const PORT = 3001;
const LOCALHOST = "localhost"; 

const NODE_ENV = process.env.NODE_ENV || true;


const DB_USER = process.env.POSTGRES_USER || "postgres";
const DB_PASSWORD = process.env.POSTGRES_PASSWORD || "admin";
const DB_HOST = process.env.POSTGRES_HOST || "localhost";
const DB_NAME = process.env.POSTGRES_DATABASE || "dogs";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;


module.exports = {
  PORT,
  NODE_ENV,
  LOCALHOST,
  DB_URL,
};

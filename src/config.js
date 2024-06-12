const PORT = process.env.PORT || 3001;
 
// /*  const PORT = 3001;
//  const LOCALHOST = "localhost"; 

const DB_USER = process.env.POSTGRES_USER || "postgres";
const DB_PASSWORD = process.env.POSTGRES_PASSWORD || "admin";
const DB_HOST = process.env.POSTGRES_HOST || "localhost";
const DB_NAME = process.env.POSTGRES_DATABASE || "dogs";
const DB_POSTGRES_URL = process.env.POSTGRES_URL || "postgres://"
//const DB_PORT = process.env.DB_PORT || 3001;
const DB_URL = `${DB_POSTGRES_URL}${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

module.exports = {
  PORT,
  DB_URL,
};

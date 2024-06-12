const PORT = process.env.PORT;
const LOCALHOST = process.env.LOCALHOST;
 
// /*  const PORT = 3001;
//  const LOCALHOST = "localhost"; 

const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "dogs";
const DB_PORT = process.env.DB_PORT || 3001;
const DB_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

module.exports = {
  PORT,
  LOCALHOST,
  DB_URL,
};

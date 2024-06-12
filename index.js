const server = require("./api/index.js");
const { conn } = require("./api/db.js");
const { PORT, LOCALHOST } = require("./api/config.js");

const startServer = async () => {
  try {
    await conn.sync({ alter: true });
    server.listen(PORT, LOCALHOST, () => {
      console.log(`Server is listening at port ${PORT} : `);

      console.log(`http://${LOCALHOST}:${PORT}`);

    });
  } catch (error) {
    console.error(" Error starting the server:", error);
  }
};

startServer();

import { sequelize } from "./sequelize";

async function testConnection() {
  console.log("Testing connection...");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

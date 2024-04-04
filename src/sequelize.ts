import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "test_database",
  "username",
  "password",
  {
    host: "database-3.cluster-cqivhopl9krr.us-east-1.rds.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        // require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

import {Options, Dialect, Sequelize } from 'sequelize'
const mysql:Dialect = "mysql"

export default
{
  development :{
    username: process.env.DEV_USERNAME || "u552287327_groupeA",
    password: process.env.DEV_PWD || "FenrirProject2021",
    database: process.env.DEV_DB || "u552287327_VerreTechStore",
    host: process.env.DEV_HOST || "31.220.106.154",
    dialect: mysql

    },
  test: {
    username: process.env.TEST_USERNAME || "u552287327_groupeA",
    password: process.env.TEST_PWD || "FenrirProject2021",
    database: process.env.TEST_DB || "u552287327_VerreTechStore",
    host: process.env.TEST_HOST || "31.220.106.154",
    dialect: mysql
  },
  production: {
    username: process.env.PROD_USERNAME || "u552287327_groupeA",
    password: process.env.PROD_PWD || "FenrirProject2021",
    database: process.env.PROD_DB || "u552287327_VerreTechStore",
    host: process.env.PROD_HOST || "31.220.106.154",
    dialect: mysql,
    logging: false
  }
}

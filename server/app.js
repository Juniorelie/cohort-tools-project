const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cohortJson = require("./cohorts.json");
const PORT = 5005;
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerOptions = require("./swagger.json");
const swaggerSpec = swaggerJSDoc(swaggerOptions);
// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// ROUTES - https://expressjs.com/en/starter/basic-routing.html
// Devs Team - Start working on the routes here:
// ...

/**
 *
 *
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Returns all the students in JSON format
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: List of examples retrieved successfully
 */
app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

app.get("/api/students", (req, res) => {
  res.sendFile(__dirname + "/students.json");
});
app.get("/api/cohorts", (req, res) => {
  res.json(cohortJson);
  // res.sendFile(__dirname + "/cohorts.json");
});

//Swagger
// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

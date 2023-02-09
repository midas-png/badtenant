const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_gen.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles);

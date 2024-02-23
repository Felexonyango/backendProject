import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express, { Application, Request, Response } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ticket Management  API",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],

    servers: [
      {
        url: "http://localhost:3001/",
        description: "Local server",
      },
      {
        url: "https://backend-project-ww9p.vercel.app/",
        description: "Live server",
      },
    ],
  },

  apis: ["./src/routes/**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app: Application, port: any) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
export default swaggerDocs;

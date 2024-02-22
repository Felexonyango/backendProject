import swaggerJsdoc from 'swagger-jsdoc'
    import swaggerUi from 'swagger-ui-express'
    import express, { Application, Request, Response } from "express";
import path from 'path';
    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Ticket Management  API',
          description: "API endpoints for Ticket Management System",
          contact: {
           
            email: "felexonyango02@gmail.com",
            url: "https://github.com/DesmondSanctity/node-js-swagger"
          },
          version: '1.0.0',
        },
        servers: [
          {
            url: "http://localhost:3001/",
            description: "Local server"
          },
          {
            url: "<your live url here>",
            description: "Live server"
          },
        ]
      },
      
  
    
      apis: ['./src/routes/**/*.ts']
    }
   
    const swaggerSpec = swaggerJsdoc(options)
    function swaggerDocs(app:Application, port:any) {
      
      app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
      
    
      app.get('/docs.json', (req:Request, res:Response) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
      })
    }
    export default swaggerDocs
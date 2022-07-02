export const swaggerOptions = {
  definition: {
      openapi: "3.0.0",
      info: {
          title: "ALKEMY CHALLENGE",
          version: "1.0.0",
      },
      servers: [
          {
              url: "http://localhost:5000"
          }
      ],
      components: {
          securitySchemes: {
              bearerAuth: {
                  type: "http",
                  scheme: "bearer",
                  bearerFormat: "JWT"
              }
          }
      },
      security: [
          {
              bearerAuth: []
          }
      ]
  },
  apis: ["./src/routes/*.js"]
};

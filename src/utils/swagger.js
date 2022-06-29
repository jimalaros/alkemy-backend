export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ALKEMY",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Servidor local",
      },
    ],
    tags: [
      {
        name: "auth",
        description: "The users stored in the database",
      },
      {
        name: "characters",
        description: "The characters stored in the database",
      },
      {
        name: "movies",
        description: "The movies stored in the database",
      },
      {
        name: "genre",
        description: "All genres stored in the database",
      },
    ],
    paths: {
      "/auth/register": {
        post: {
          tags: ["auth"],
          summary: "To register inside the app",
          security: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/register",
                },
              },
            },
          },
          responses: {
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: "Registered",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/auth/login": {
        post: {
          tags: ["auth"],
          summary: "log in",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/login",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/characters": {
        get: {
          tags: ["characters"],
          summary: "To see all the characters stored in the database",
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/character",
                  },
                },
              },
            },
            404: {
              description: "No Content",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/characters/{name}": {
        get: {
          tags: ["characters"],
          summary: "To filter the characters by name",
          parameters: [
            {
              in: "path",
              name: "name",
              description: "name of the character",
              required: true,
              schema: {
                type: "string",
                example: "Will Smith",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/character",
                  },
                },
              },
            },
            404: {
              description: "No Content",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/characters/{age}": {
        get: {
          tags: ["characters"],
          summary: "To filter the characters by age",
          parameters: [
            {
              in: "path",
              age: "age",
              description: "age of the character",
              required: true,
              schema: {
                type: "string",
                example: "Will Smith",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/character",
                  },
                },
              },
            },
            404: {
              description: "No Content",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/characters/newCharacter": {
        post: {
          tags: ["characters"],
          summary: "To create characters",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/character",
                },
              },
            },
          },
          responses: {
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/characters/update/{id}": {
        put: {
          tags: ["characters"],
          summary: "To update the data of the characters",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73a",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/character",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/characters/delete/{id}": {
        delete: {
          tags: ["characters"],
          summary: "To delete the characters",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "identifier of the character",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/movies": {
        get: {
          tags: ["movies"],
          summary: "To see all the movies stored in the database",
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/movie",
                  },
                },
              },
            },
            404: {
              description: "No Content",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/movies/{title}": {
        get: {
          tags: ["movies"],
          summary: "To filter the movies by title",
          parameters: [
            {
              in: "path",
              title: "title",
              description: "title of the movie",
              required: true,
              schema: {
                type: "string",
                example: "Will Smith",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/movie",
                  },
                },
              },
            },
            404: {
              description: "No Content",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/movies/{genre}": {
        get: {
          tags: ["movies"],
          summary: "To filter the movies by genre",
          parameters: [
            {
              in: "path",
              genre: "genre",
              description: "genre of the movie",
              required: true,
              schema: {
                type: "string",
                example: "Will Smith",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/movie",
                  },
                },
              },
            },
            404: {
              description: "No Content",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/movies/newCharacter": {
        post: {
          tags: ["movies"],
          summary: "To create movies",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/movie",
                },
              },
            },
          },
          responses: {
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/movies/update/{id}": {
        put: {
          tags: ["movies"],
          summary: "To update the data of the movies",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73a",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/movie",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/movies/delete/{id}": {
        delete: {
          tags: ["movies"],
          summary: "To delete the movies",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "identifier of the movie",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
      schemas: {
        character: {
          type: "object",
          required: [
            "imageCharacter",
            "nameCharacter",
            "ageCharacter",
            "weight",
            "history",
          ],
          properties: {
            imageCharacter: {
              type: "string",
              example: "WillSmith.jpg",
            },
            nameCharacter: {
              type: "string",
              example: "Will Smith",
            },
            ageCharacter: {
              type: "number",
              example: 53,
            },
            weight: {
              type: "number",
              example: 85,
            },
            history: {
              type: "string",
              example: "Hollywood Actor",
            },
          },
        },
        movie: {
          type: "object",
          required: ["imageMovie", "title", "rating"],
          properties: {
            imageMovie: {
              type: "string",
              example: "BadBoys.jpg",
            },
            title: {
              type: "string",
              example: "Bad Boys",
            },
            rating: {
              type: "number",
              example: 1,
            },
            characters: {
              type: "array",
              items: {},
              example: ["Will Smith", "Morgan Freeman"],
            },
          },
        },
        register: {
          type: "object",
          required: ["nameUser", "email", "password"],
          properties: {
            nameUser: {
              type: "string",
              example: "alex",
            },
            email: {
              type: "string",
              example: "j.j@gmail.com",
            },
            password: {
              type: "string",
              example: "111111",
            },
          },
        },
        login: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              example: "j.j@gmail.com",
            },
            password: {
              type: "string",
              example: "111111",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes*.js"],
};

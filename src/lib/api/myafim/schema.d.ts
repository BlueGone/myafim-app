/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/accounts": {
    get: {
      parameters: {
        query: {
          ids: number[];
          page?: number;
          limit?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "application/json": components["schemas"]["AccountPagination"];
          };
        };
      };
    };
  };
  "/accounts/{id}/balance": {
    get: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "application/json": number;
          };
        };
      };
    };
  };
  "/categories": {
    get: {
      parameters: {
        query?: {
          page?: number;
          limit?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "application/json": components["schemas"]["CategoryPagination"];
          };
        };
      };
    };
  };
  "/import/firefly-iii": {
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["ImportFireflyIiiRequest"];
        };
      };
      responses: {
        /** @description No Content */
        204: {
          content: never;
        };
      };
    };
  };
  "/transactions": {
    get: {
      parameters: {
        query?: {
          minValueDate?: string;
          maxValueDate?: string;
          page?: number;
          limit?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "application/json": components["schemas"]["TransactionPagination"];
          };
        };
      };
    };
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["CreateTransactionRequest"];
        };
      };
      responses: {
        /** @description Created */
        201: {
          content: {
            "application/json": components["schemas"]["Transaction"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/json": string[];
          };
        };
      };
    };
  };
  "/transactions/{id}": {
    get: operations["GetTransactionById"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Account: {
      /** Format: int32 */
      id: number;
      name: string;
    };
    AccountPagination: {
      /** Format: int64 */
      totalItems: number;
      /** Format: int32 */
      currentPage: number;
      /** Format: int32 */
      nextPage?: number | null;
      /** Format: int32 */
      previousPage?: number | null;
      /** Format: int32 */
      totalPages: number;
      results: components["schemas"]["Account"][];
    };
    Category: {
      /** Format: int32 */
      id: number;
      name: string;
      emoji?: string | null;
    };
    CategoryPagination: {
      /** Format: int64 */
      totalItems: number;
      /** Format: int32 */
      currentPage: number;
      /** Format: int32 */
      nextPage?: number | null;
      /** Format: int32 */
      previousPage?: number | null;
      /** Format: int32 */
      totalPages: number;
      results: components["schemas"]["Category"][];
    };
    CreateTransactionRequest: {
      description?: string | null;
      /** Format: int64 */
      amount?: number;
      /** Format: date-time */
      valueDate?: string;
      /** Format: int32 */
      sourceAccountId?: number;
      /** Format: int32 */
      destinationAccountId?: number;
      /** Format: int32 */
      categoryId?: number | null;
    };
    ImportFireflyIiiRequest: {
      /** Format: uri */
      baseUri?: string;
      token?: string;
    };
    Transaction: {
      /** Format: int32 */
      id: number;
      description: string;
      /** Format: int64 */
      amount: number;
      /** Format: date-time */
      valueDate: string;
      /** Format: int32 */
      sourceAccountId: number;
      /** Format: int32 */
      destinationAccountId: number;
      /** Format: int32 */
      categoryId: number;
    };
    TransactionPagination: {
      /** Format: int64 */
      totalItems: number;
      /** Format: int32 */
      currentPage: number;
      /** Format: int32 */
      nextPage?: number | null;
      /** Format: int32 */
      previousPage?: number | null;
      /** Format: int32 */
      totalPages: number;
      results: components["schemas"]["Transaction"][];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  GetTransactionById: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["Transaction"];
        };
      };
      /** @description Not Found */
      404: {
        content: never;
      };
    };
  };
}

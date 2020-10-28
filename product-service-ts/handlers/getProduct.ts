import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const getProduct: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ user: "shiny product" }),
  };
};

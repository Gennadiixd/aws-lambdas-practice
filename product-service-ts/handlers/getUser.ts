import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const getUser: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ user: "best user" }),
  };
};

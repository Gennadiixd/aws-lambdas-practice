import "source-map-support/register";

import { getProduct } from "./handlers/getProduct";
import { getUser } from "./handlers/getUser";

export { getProduct, getUser };
// serverless invoke local --function getUser --data '{body: "hello"}'
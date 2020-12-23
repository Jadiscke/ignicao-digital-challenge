import server from "./server";
import { init } from "./utils";

init();

const PORT: String = process.env.PORT ? process.env.PORT : "3000";
console.log(typeof process.env.PORT);
server.listen(PORT, () => {
  console.log("Listening on: ", PORT);
});

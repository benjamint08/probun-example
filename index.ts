import {ProBun} from "probun";
import {powered} from "./middleware/powered";
import {cors} from "./middleware/cors";

const server = new ProBun({
    port: 3000,
    routes: "routes",
    logger: true,
    // mongoUri: Bun.env.MONGO_URI || "mongodb://localhost:27017/", (Optional)
});

server.definePreMiddleware(powered);
server.definePostMiddleware(cors);
server.start();

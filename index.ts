import {ProBun} from "probun";
import {powered} from "./middleware/powered";
import {cors} from "./middleware/cors";

const server = new ProBun({
    port: 3000,
    routes: "routes",
    logger: true,
    // mongoUri: Bun.env.MONGO_URI || "mongodb://localhost:27017/", (Optional)
    // pgConfig: {
    //     user: Bun.env.PG_USER || 'postgres',
    //     host: Bun.env.PG_HOST || 'localhost',
    //     database: Bun.env.PG_DB || 'postgres',
    //     password: Bun.env.PG_PASSWORD || 'postgres', //replace with actual password
    //     port: Bun.env.PG_PORT || 5432,
    // } (Optional)
});

server.definePreMiddleware(powered);
server.definePostMiddleware(cors);
server.start();
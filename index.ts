import {ProBun} from "probun";

const server = new ProBun({
    port: 3000,
    routes: "routes",
    logger: true
});

server.start();
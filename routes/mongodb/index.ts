// Every helper function has a way to change the status code of the response.
import {MongoService, Success} from "probun";

export async function GET(req: Request): Promise<Response> {
    try {
        const Mongo = MongoService.getInstance();
        const time = new Date();
        await Mongo.insert("test", "time", { time });
        return Success("Inserted time into database.");
    } catch (error) {
        return Success("Error inserting time into database... maybe the db/col doesn't exist? Error: " + error);
    }
}
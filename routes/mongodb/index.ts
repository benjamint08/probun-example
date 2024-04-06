// Every helper function has a way to change the status code of the response.
import {Failure, MongoService, Success} from "probun";

export async function GET(req: Request): Promise<Response> {
    try {
        const Mongo = MongoService.getInstance();
        const time = new Date();
        await Mongo.insert("test", "time", { time });
        return Success("Inserted time into database.");
    } catch (error: any) {
        return Failure(error.toString());
    }
}
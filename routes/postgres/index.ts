// Every helper function has a way to change the status code of the response.
import {PgService, Success, Failure} from "probun";

export async function GET(req: Request): Promise<Response> {
    try {
        const pg = PgService.getInstance();
        const time = new Date();
        await pg.query("INSERT INTO time (time) VALUES ($1)", [time]);
        return Success("Inserted time into database.");
    } catch (error: any) {
        return Failure(error);
    }
}
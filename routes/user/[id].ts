// Every helper function has a way to change the status code of the response.
import { Failure, SendJSON, param, MongoService } from "probun";

export async function GET(req: Request): Promise<Response> {
    const id = await param(req);
    // check if id is in database "test" and collection "users"
    const user = await MongoService.getInstance().findOne("test", "users", { id });
    if (!user) {
        return Failure("User not found.");
    }
    delete user._id;
    return SendJSON({
        message: "Hi!",
        user
    }, 200)
}

export async function POST(req: Request): Promise<Response> {
    try {
        const id = await param(req);
        return SendJSON({
            message: "Hi!",
            id
        }, 200);
    } catch (error) {
        return Failure("Invalid JSON.")
    }
}
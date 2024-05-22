import { SendJSON, json, Failure } from "probun";

export async function POST(req: Request): Promise<Response> {
    try {
        const body = await json(req);
        return SendJSON({
            body
        }, 200);
    } catch (error) {
        return Failure("Invalid JSON.")
    }
}
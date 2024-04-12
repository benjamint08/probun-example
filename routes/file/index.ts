import {SendFile} from "probun";
import * as path from "path";

export async function GET(req: Request): Promise<Response> {
    return SendFile(path.join(__dirname, "test.txt"));
}
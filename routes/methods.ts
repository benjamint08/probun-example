import { Success } from "probun";

export async function GET(req: Request): Promise<Response> {
    return Success("GET request successful!")
}

export async function POST(req: Request): Promise<Response> {
    return Success("POST request successful!")
}

export async function PUT(req: Request): Promise<Response> {
    return Success("PUT request successful!")
}

export async function DELETE(req: Request): Promise<Response> {
    return Success("DELETE request successful!")
}

export async function PATCH(req: Request): Promise<Response> {
    return Success("PATCH request successful!")
}
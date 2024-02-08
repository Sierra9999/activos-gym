import { NextResponse } from "next/server";

const emails = {
    '1' : "some.email@outlook.com"
}

export async function GET() {
    return NextResponse.json(emails)
}

export async function POST(body) {
    
}
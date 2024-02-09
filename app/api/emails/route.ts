import { NextRequest, NextResponse } from "next/server";

const emails = {
    '1' : "some.email@outlook.com"
}

export async function GET() {
    return NextResponse.json(emails)
}

export async function POST(request: NextRequest) {
    await request.json().then(x =>{
        console.log(x)
    })
    return NextResponse.json(emails)
}
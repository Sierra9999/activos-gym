import { NextRequest, NextResponse } from "next/server";

const emails = [ 
    "some.email@outlook.com"
]

export async function GET() {
    return NextResponse.json(emails)
}

export async function POST(request: NextRequest) {
    await request.json().then(x =>{
        emails.push(x)       
    })
    console.log(emails)

    return NextResponse.json({
        success : true ,
        data : emails, 
        message: "succesful!",    
    },
    {
        status : 200,
    })

}
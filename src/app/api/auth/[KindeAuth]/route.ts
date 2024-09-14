import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server"

//import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: any) {
  const endpoint = params.KindeAuth
  console.log(params)
  return handleAuth(request, endpoint)
}

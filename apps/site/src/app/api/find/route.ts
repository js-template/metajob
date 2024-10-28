// app/api/find/route.ts
// TODO: Check security status.
import { find } from "@/lib/strapi"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url)

   const model = searchParams.get("model") as string
   const query = JSON.parse(searchParams.get("query") as string)
   const cache = (searchParams.get("cache") as "force-cache" | "no-cache" | "no-store") || "force-cache"
   const revalidate = searchParams.get("revalidate")
      ? parseInt(searchParams.get("revalidate") as string, 10)
      : undefined

   // Define the expected type of the result
   type FindResult = { data: any; error: null } | { data: null; error: any }

   const result: FindResult = await find(model, query, cache, revalidate)

   if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 500 })
   }

   return NextResponse.json({ data: result.data })
}

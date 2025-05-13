import { NextRequest, NextResponse } from "next/server"
import { auth } from "./context/auth"

export async function middleware(req: NextRequest, res: NextResponse) {
   const { nextUrl } = req
   const queryString = nextUrl.search // Preserve query parameters
   const proto = await req.headers.get("x-forwarded-proto")
   const host = await req.headers.get("host")
   const requestUrl = await `${proto}://${host}`
   const session = await auth()
   const isLoggedIn = !!session?.user
   const userRoleType = session?.user?.role?.type

   const authenticatedType = userRoleType === "authenticated"
   const isChooseRolePage = nextUrl.pathname.startsWith("/dashboard/choose-role")
   const isDashboardPage = nextUrl.pathname.startsWith("/dashboard")

   //**Not authenticated, redirect to login **/
   if (!session && isDashboardPage) {
      return NextResponse.redirect(new URL("/login", req.url))
   }

   //    move to choose-role page if user is authenticated and has not on chosen a role
   if (isLoggedIn && (authenticatedType || !userRoleType) && !isChooseRolePage) {
      return Response.redirect(new URL(`${requestUrl}/dashboard/choose-role${queryString}`, nextUrl))
   }

   // if the user is not authenticated and the nextUrl is /dashboard/choose-role then redirect to /dashboard
   if (isChooseRolePage && !authenticatedType) {
      return Response.redirect(new URL(`${requestUrl}/dashboard`, nextUrl))
   }

   // Authenticated, allow the request
   return NextResponse.next()
}

export const config = { matcher: ["/dashboard/:path*"] }

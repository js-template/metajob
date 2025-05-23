import { find } from "@/lib/strapi"
import React, { Suspense } from "react"
import { auth } from "@/context/auth"
import { redirect } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next/types"
import { getLanguageFromCookie } from "@/utils/language"
import { PrivateHomePageLoader } from "@/components/loader/private-home-loader"
import Body from "./body"

// *** generate metadata type
type Props = {
   params: { slug: string }
}

export default async function ChooseRolePage({ params }: { params: { page: string } }) {
   const language = await getLanguageFromCookie()

   // Get user session
   const session = await auth()
   if (!session) {
      redirect("/login")
   }

   // fetch all roles data
   const { data: allRoles, error } = await find(
      "api/users-permissions/roles",
      {
         filters: {
            type: {
               $or: [{ $ne: "public" }, { $ne: "authenticated" }]
            }
         },
         locale: language ?? "en"
      },
      "no-store"
   )
   const allRolesData = allRoles?.roles
      .filter((role: any) => role.type !== "public" && role.type !== "authenticated")
      ?.reverse()

   return (
      <Suspense fallback={<PrivateHomePageLoader />}>
         <Body language={language} allRolesData={allRolesData} />
      </Suspense>
   )
}

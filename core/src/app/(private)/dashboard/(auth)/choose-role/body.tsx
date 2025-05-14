"use client"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { useSession } from "next-auth/react"
import { LoadingButton } from "@mui/lab"
import { Box, Button, Paper, Typography } from "@mui/material"
import _ from "lodash"
import { updateOne } from "@/lib/strapi"

interface BodyProps {
   language?: string
   allRolesData?: any
}

const Body: React.FC<BodyProps> = ({ language, allRolesData }) => {
   const { data: session, update } = useSession()
   // session data destructuring
   const { user } = session || {}
   const { id: userId } = user || {}

   const [selectedButton, setSelectedButton] = useState(allRolesData?.[0]?.id)
   const [loading, setLoading] = useState(false)

   // *** Update the user role submit handler
   const updateRoleHandler = async () => {
      try {
         if (!user || !userId) return
         setLoading(true)
         // *** Update the user role
         const updateData = await updateOne("users", userId, {
            role: selectedButton
         })

         if (!updateData.error) {
            // get selected role
            const selectedRole = _.find(allRolesData, { id: selectedButton })
            //  Update the user session
            await update({
               role: selectedRole
            })
            toast.success("Role updated successfully")
            if (typeof window !== "undefined") {
               window.location.reload()
            }
         } else {
            toast.error(updateData.error ?? "Something went wrong")
         }
      } catch (error: any) {
         toast.error(error?.message ?? "Something went wrong")
      } finally {
         setLoading(false)
      }
   }
   return (
      <Paper
         elevation={0}
         sx={{
            width: "100%",
            maxWidth: "700px",
            m: "auto",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "12px",
            p: 0,
            my: 5
         }}>
         {/* Heading */}
         <Box
            sx={{
               p: 3,
               borderBottom: "1px solid",
               borderColor: "divider"
            }}>
            <Typography variant='h5' fontWeight={600} textAlign={"center"} className='notranslate' lineHeight={"24px"}>
               Choose Your Role
            </Typography>
         </Box>

         {/* Body */}
         <Box sx={{ p: 3 }}>
            <Typography variant='body1' textAlign={"center"} lineHeight={"24px"} className='notranslate'>
               You can choose your role from the list below. This will help us to provide you with a better experience.
            </Typography>

            {/* Role Selection */}
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mt: 3, gap: 3 }}>
               {_.map(allRolesData, (role) => {
                  return (
                     <Button
                        key={role.id}
                        onClick={() => {
                           setSelectedButton(role?.id)
                        }}
                        variant='outlined'
                        sx={{
                           border: "1px solid",
                           borderColor: (theme) => theme.palette.divider,
                           borderRadius: "10px",
                           textTransform: "capitalize",
                           color:
                              selectedButton === role.id
                                 ? (theme) => theme.palette.primary.contrastText
                                 : (theme) => theme.palette.text.primary,
                           backgroundColor:
                              selectedButton === role.id
                                 ? (theme) => theme.palette.primary.main
                                 : (theme) => theme.palette.background.paper,
                           padding: "12px 30px",
                           fontSize: "16px",
                           "&:hover": {
                              backgroundColor: (theme) => theme.palette.secondary.main,
                              color: (theme) => theme.palette.primary.contrastText,
                              borderColor: (theme) => theme.palette.secondary.main
                           }
                        }}>
                        {role.name}
                     </Button>
                  )
               })}
            </Box>
         </Box>

         {/* Footer */}
         <Box
            sx={{
               p: 3,
               borderTop: "1px solid",
               borderColor: "divider",
               display: "flex",
               justifyContent: "end"
            }}>
            <LoadingButton
               onClick={updateRoleHandler}
               loading={loading}
               variant='contained'
               className='notranslate'
               size='large'
               color='primary'>
               Update
            </LoadingButton>
         </Box>
      </Paper>
   )
}

export default Body

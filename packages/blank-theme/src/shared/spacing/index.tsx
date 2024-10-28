"use client"
import { Box, Grid } from "@mui/material"
import { SpacingProps } from "./type"
import { IUserSession } from "../../types/user"

const Spacing = ({
   block
}: {
   block: SpacingProps
   session?: IUserSession | null | any
   data?: any
   language?: string
}) => {
   return (
      <Grid item xs={12} sm={12} md={12} lg={12}>
         <Box
            sx={{
               width: "100%",
               ...(block?.gap && { height: block?.gap + "px" }),
               display: "flex",
               flexDirection: "column"
            }}
         />
      </Grid>
   )
}

export default Spacing

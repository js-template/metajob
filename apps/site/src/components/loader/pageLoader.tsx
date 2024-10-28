import React from "react"
import { Box, CircularProgress } from "@mui/material"

export const PageLoader = () => {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh"
         }}>
         <CircularProgress />
      </Box>
   )
}

"use client"
import React from "react"
import { Stack, useTheme, useMediaQuery, Skeleton, Grid, Box } from "@mui/material"

export const PrivateHomePageLoader = () => {
   const theme = useTheme()
   const isTablet = useMediaQuery(theme.breakpoints.down("sm"))

   return (
      <Box>
         <Grid container columnSpacing={{ sx: 0, sm: 2 }} sx={{ pb: 5 }}>
            {Array.from({ length: isTablet ? 1 : 4 }, (_, index) => (
               <Grid item xs={12} sm={3} key={index}>
                  <Stack spacing={2}>
                     <Skeleton variant='rounded' height={170} animation='wave' />
                  </Stack>
               </Grid>
            ))}
         </Grid>
         <Grid container columnSpacing={{ sx: 0, sm: 2 }} sx={{ mb: 5 }}>
            {Array.from({ length: isTablet ? 1 : 2 }, (_, index) => (
               <Grid item xs={12} sm={6} key={index}>
                  <Stack spacing={2}>
                     <Skeleton variant='rectangular' height={500} animation='wave' />
                  </Stack>
               </Grid>
            ))}
         </Grid>
      </Box>
   )
}

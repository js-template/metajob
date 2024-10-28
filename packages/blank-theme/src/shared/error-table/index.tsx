import { Box, Grid, Typography } from "@mui/material"

export const AccessError = () => {
   return (
      <Grid item xs={12}>
         <Box
            sx={{
               position: "relative",
               px: 3,
               py: 5,
               border: "1px solid",
               borderColor: "divider",
               borderRadius: "12px",
               height: "100%",
               display: "flex",
               // flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               backgroundColor: (theme) => theme.palette.background.paper,
               textAlign: "center",
               transition: "all 0.3s ease",
               ":hover": {
                  borderColor: (theme) => theme.palette.error.main,
                  boxShadow: (theme) => `0 15px 40px 0 ${theme.palette.error.main + "10"}`
               }
            }}>
            <Typography variant='h3' color='error'>
               Access Denied
            </Typography>
            <Typography variant='body1' color='error'>
               This widget is only for Employer
            </Typography>
         </Box>
      </Grid>
   )
}

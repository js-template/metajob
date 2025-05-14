"use client"
import React from "react"
import {
   Toolbar,
   Container,
   Box,
   Stack,
   useTheme,
   useMediaQuery,
   Skeleton,
   styled,
   List,
   ListItem
} from "@mui/material"
import { CSSObject, Theme } from "@mui/material/styles"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"

interface AppBarProps extends MuiAppBarProps {
   open?: boolean
}

const drawerWidth = 260

const openedMixin = (theme: Theme): CSSObject => ({
   width: drawerWidth,
   marginTop: "73px",
   height: "calc(100% - 75px)",
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
   }),
   overflowX: "hidden"
})

const closedMixin = (theme: Theme): CSSObject => ({
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
   }),
   overflowX: "hidden",
   width: `0px`
})

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
   }),
   width: `calc(100%)`,
   minHeight: "73px",
   display: "grid",
   alignItems: "center"
}))

const Drawer = styled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
   flexShrink: 0,
   whiteSpace: "nowrap",
   boxSizing: "border-box",
   mt: 10,
   ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme)
   }),
   ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme)
   })
}))

export const PrivateHeaderLoader = () => {
   const theme = useTheme()
   const isTablet = useMediaQuery(theme.breakpoints.down("sm"))

   return (
      <Box sx={{ display: "flex" }}>
         <AppBar
            position='fixed'
            open={true}
            sx={{
               background: theme.palette.background.paper,
               boxShadow: "none",
               borderBottom: `1px solid ${theme.palette.divider}`,
               color: theme.palette.text.primary
            }}>
            <Container maxWidth='lg' sx={{ width: "100%" }}>
               <Toolbar
                  disableGutters
                  sx={{
                     justifyContent: "space-between"
                  }}>
                  <Box
                     sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                     }}>
                     {/* desktop-logo */}
                     <Box
                        sx={{
                           display: { xs: "none", md: "flex" }
                        }}>
                        <Skeleton variant='rounded' width={140} height={33} />
                     </Box>
                     {/* mobile menu  */}
                     <Box sx={{ flex: "none", display: { xs: "flex", md: "none" } }}>
                        <Skeleton variant='rounded' width={36} height={36} />
                     </Box>
                     {/* mobile-logo */}
                     <Box
                        sx={{
                           display: { xs: "flex", md: "none" },
                           flexGrow: 1,
                           justifyContent: "center"
                        }}>
                        <Skeleton variant='rounded' width={120} height={33} />
                     </Box>
                  </Box>
                  {/* desktop main-menu  */}
                  <Box
                     sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center"
                     }}>
                     <Stack direction={"row"} gap={3}>
                        {/* Main Menu Item */}
                        <Box sx={{ position: "relative" }}>
                           <Skeleton variant='text' width={42} height={25} />
                        </Box>
                        <Box sx={{ position: "relative" }}>
                           <Skeleton variant='text' width={42} height={25} />
                        </Box>
                        <Box sx={{ position: "relative" }}>
                           <Skeleton variant='text' width={42} height={25} />
                        </Box>
                     </Stack>
                  </Box>
                  <Box sx={{ flexGrow: 0 }}>
                     {/* before login  */}
                     <Stack direction={"row"} gap={1.5}>
                        {/* language-theme buttons  */}
                        {!isTablet && (
                           <>
                              {/* language-button  */}
                              <Skeleton variant='rounded' width={65} height={24} />
                              {/* theme-button  */}
                              <Skeleton variant='rounded' width={24} height={24} />
                           </>
                        )}
                        {/* button (Ex: login/register) */}
                        <Skeleton variant='rounded' width={75} height={45} />
                        <Skeleton variant='rounded' width={75} height={45} />
                     </Stack>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>

         {/* Desktop side nav */}
         {!isTablet && (
            <Drawer anchor={theme.direction === "rtl" ? "right" : "left"} variant='permanent' open={true}>
               <List sx={{ py: 2, px: 1.5 }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8]?.map((_, index) => (
                     <ListItem key={index} sx={{ display: "block", py: 0, mb: 1, px: 0 }}>
                        <Skeleton variant='rounded' width={"100%"} height={40} />
                     </ListItem>
                  ))}
               </List>
            </Drawer>
         )}
      </Box>
   )
}

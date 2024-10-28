"use client"
import { Box, Button, Divider, Drawer, IconButton, List, Menu, MenuItem, useTheme } from "@mui/material"
import _ from "lodash"
import { useState } from "react"
import CIcon from "../../../components/common/icon"
import NavItems from "./NavItems"
import { SharedMenuList } from "./type"
import { useTheme as modeUseTheme } from "next-themes"
import { getLanguageValue } from "../../../utils"
import { PublicHeaderDataProps } from "../../header/types"

type MobileNavProps = {
   open: boolean
   setOpen: (open: boolean) => void
   SignOut: any
   sidebarMenus: SharedMenuList
   headerData: PublicHeaderDataProps
   changeLang: (lang: string) => void
   changeDirection: (dir: "rtl" | "ltr") => void
   lang: string
   useSession: any
   signOut: () => Promise<void>
}

const MobileNav = ({
   open,
   setOpen,
   SignOut,
   sidebarMenus,
   changeLang,
   changeDirection,
   lang,
   headerData,
   signOut,
   useSession
}: MobileNavProps) => {
   const { data: session } = useSession()
   const { theme: mode, setTheme } = modeUseTheme()
   const toggleTheme = () => {
      setTheme(mode === "dark" ? "light" : "dark")
   }
   const theme = useTheme()

   // *** Language Menu ***
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const openLang = Boolean(anchorEl)
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const sidebarMenu =
      session?.user?.role?.type === "candidate"
         ? ((sidebarMenus && sidebarMenus?.find((menu) => menu.role === "candidate")?.menus) ?? [])
         : session?.user?.role?.type === "employer"
           ? ((sidebarMenus && sidebarMenus?.find((menu) => menu.role === "employer")?.menus) ?? [])
           : ((sidebarMenus && sidebarMenus?.find((menu) => menu.role === "candidate")?.menus) ?? [])

   return (
      <Drawer
         open={open}
         onClose={() => setOpen(!open)}
         sx={{
            zIndex: (theme) => (open ? theme.zIndex.drawer + 1 : -1),
            "& .MuiDrawer-paper": {
               maxWidth: "280px",
               width: "100%",
               bgcolor: "background.default"
            }
         }}>
         {(headerData?.langMenu && headerData?.langMenu.length > 1) ||
            (headerData?.dark_mode && (
               <>
                  <Box
                     sx={{
                        py: 1.5,
                        px: 1.5,
                        flexGrow: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1.5
                     }}>
                     {/* language-button  */}
                     {headerData?.langMenu && headerData?.langMenu.length > 1 && (
                        <Box>
                           <Button
                              id='basic-button'
                              aria-controls={openLang ? "basic-menu" : undefined}
                              aria-haspopup='true'
                              aria-expanded={openLang ? "true" : undefined}
                              color='inherit'
                              variant='text'
                              onClick={handleClick}
                              sx={{
                                 textTransform: "capitalize",
                                 display: "flex",
                                 fontSize: "1rem",
                                 gap: 1
                              }}>
                              <CIcon
                                 icon='tabler:language'
                                 sx={{
                                    fontSize: "1.25rem"
                                 }}
                              />
                              {getLanguageValue(lang as any) || "English"}
                              <CIcon
                                 icon='ri:arrow-down-s-line'
                                 sx={{
                                    color: theme.palette.text.primary,
                                    transform: openLang ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: theme.transitions.create("transform", {
                                       duration: theme.transitions.duration.shortest
                                    })
                                 }}
                              />
                           </Button>
                           <Menu
                              id='basic-menu'
                              anchorEl={anchorEl}
                              open={openLang}
                              onClose={handleClose}
                              MenuListProps={{
                                 "aria-labelledby": "basic-button"
                              }}>
                              {_.map(headerData?.langMenu, (lang, index) => (
                                 <MenuItem
                                    onClick={() => {
                                       if (lang?.link === "ar") {
                                          if (changeDirection) {
                                             changeDirection("rtl")
                                          }
                                          changeLang(lang?.link)
                                          window.location.reload()
                                       } else if (lang?.link === "en" || lang?.link === "es") {
                                          if (changeDirection) {
                                             changeDirection("ltr")
                                          }
                                          changeLang(lang?.link)
                                          window.location.reload()
                                       }
                                       handleClose()
                                    }}
                                    sx={{
                                       color: theme.palette.text.primary,
                                       px: 2,
                                       gap: 1.5,
                                       textAlign: "left",
                                       ":hover": {
                                          background: theme.palette.background.default,
                                          color: theme.palette.primary.main
                                       }
                                    }}
                                    key={index}>
                                    {lang?.link && (
                                       <CIcon
                                          icon={lang?.link}
                                          size={22}
                                          sx={{ color: theme.palette.text.primary + "60" }}
                                       />
                                    )}
                                    {lang?.label ?? "English"}
                                 </MenuItem>
                              ))}
                           </Menu>
                        </Box>
                     )}
                     {/* dark-light-theme-toggle  */}
                     {headerData?.dark_mode && (
                        <IconButton size='large' color='inherit' onClick={toggleTheme}>
                           <CIcon icon={mode === "light" ? "ri:moon-fill" : "ri:sun-fill"} />
                        </IconButton>
                     )}
                  </Box>
               </>
            ))}
         <Divider />
         <List sx={{ mt: 2, p: 2 }}>{NavItems(sidebarMenu, open, theme.direction as any, signOut)}</List>
         {/* <Divider />
         <List sx={{ p: 2 }}>
            <Typography
               variant='body2'
               sx={{
                  color: "text.secondary",
                  px: 2,
                  py: 1
               }}>
               Main Menu
            </Typography>
            {_.map(mainMenu, (text, index) => (
               <ListItem key={index} disablePadding sx={{ display: "block" }}>
                  <NavLink item={text} open={open} isChild direction={direction as any} />
               </ListItem>
            ))}
         </List> */}
      </Drawer>
   )
}

export default MobileNav

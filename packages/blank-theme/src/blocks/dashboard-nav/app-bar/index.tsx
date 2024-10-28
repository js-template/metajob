"use client"
import useSWR from "swr"
import CIcon from "../../../components/common/icon"
import MenuIcon from "@mui/icons-material/Menu"
import { LoadingButton } from "@mui/lab"
import {
   Avatar,
   Box,
   Button,
   CircularProgress,
   IconButton,
   Menu,
   MenuItem,
   Toolbar,
   Tooltip,
   Typography,
   useMediaQuery,
   useTheme
} from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"
import _ from "lodash"
import NextLink from "next/link"
import React from "react"
import toast from "react-hot-toast"
import { fetcher } from "./hook"
import { getLanguageValue } from "../../../utils"
import { useTheme as modeUseTheme } from "next-themes"
import { MenuItemProps, PublicHeaderDataProps } from "../../header/types"

interface AppBarProps extends MuiAppBarProps {
   open?: boolean
}

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

const Image = styled("img")({
   display: "block",
   maxWidth: "200px",
   height: "auto"
})

const CustomAppBar = ({
   open,
   handleDrawerOpen,
   handleOpenUserMenu,
   handleCloseUserMenu,
   anchorElUser,
   SignOut,
   changeLang,
   lang,
   changeDirection,
   headerData,
   useSession,
   signOut
}: {
   open: boolean
   handleDrawerOpen: () => void
   handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
   handleCloseUserMenu: () => void
   anchorElUser: null | HTMLElement
   SignOut: () => Promise<void>
   changeLang: (lang: string) => void
   lang: string
   changeDirection?: (dir: "rtl" | "ltr") => void
   headerData: PublicHeaderDataProps
   useSession: any
   signOut: () => Promise<void>
}) => {
   const theme = useTheme()
   const [loading, setLoading] = React.useState(false)
   const { data, status } = useSession()
   const { theme: mode, setTheme } = modeUseTheme()
   const toggleTheme = () => {
      setTheme(mode === "dark" ? "light" : "dark")
   }
   const isTablet = useMediaQuery(theme.breakpoints.down("sm"))

   // *** Language Menu ***
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const openLang = Boolean(anchorEl)
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const LogOutHandler = async () => {
      setLoading(true)
      await signOut().then(() => {
         SignOut().then(() => {
            toast.success("Logout successfully", {
               duration: 5000
            })
            setLoading(false)
         })
      })
   }

   const queryParams = {
      populate: "avatar, role",
      publicationState: "live"
   }

   // fetch user avatar data
   const userId = data?.user?.id
   const queryString = encodeURIComponent(JSON.stringify(queryParams))
   const apiUrl = userId ? `/api/find?model=api/users/${userId}&query=${queryString}&cache=no-store` : null

   const { data: userData, error } = useSWR(apiUrl, fetcher)
   const userAvatar = userData?.avatar?.url || ""
   const userName = data?.user?.name || ""

   const logo =
      mode === "light"
         ? headerData?.light_logo?.logo?.data?.attributes?.url
         : headerData?.dark_logo?.logo?.data?.attributes?.url

   const dashboardLink = mode === "light" ? headerData?.light_logo?.link : headerData?.dark_logo?.link

   return (
      <AppBar
         position='fixed'
         open={open}
         sx={{
            background: theme.palette.background.paper,
            boxShadow: "none",
            borderBottom: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.primary
         }}>
         <Toolbar
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center"
            }}>
            <Box
               sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center"
               }}>
               <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={handleDrawerOpen}
                  edge='start'
                  sx={{
                     ...(!isTablet && { display: "none" })
                  }}>
                  <MenuIcon />
               </IconButton>
               {logo && (
                  <Box
                     sx={{
                        display: { xs: "none", md: "flex" }
                     }}
                     component={NextLink}
                     href={dashboardLink ?? "/"}>
                     <Image
                        src={logo}
                        alt='logo'
                        sx={{
                           width: {
                              xs: headerData?.light_logo?.xs_width ?? "auto",
                              sm: headerData?.light_logo?.sm_width ?? "auto",
                              md: headerData?.light_logo?.md_width ?? "auto"
                           }
                        }}
                     />
                  </Box>
               )}
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 1.5 }}>
               {!isTablet && (
                  <>
                     {/* language-button  */}
                     {headerData?.langMenu && headerData?.langMenu.length > 0 && (
                        <Box
                           sx={{
                              display: {
                                 xs: "none",
                                 sm: "flex"
                              }
                           }}>
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
                        <IconButton
                           size='large'
                           color='inherit'
                           sx={{
                              display: {
                                 xs: "none",
                                 sm: "flex"
                              }
                           }}
                           onClick={toggleTheme}>
                           <CIcon icon={mode === "light" ? "ri:moon-fill" : "ri:sun-fill"} />
                        </IconButton>
                     )}
                  </>
               )}
               {/* notification-button  */}
               {headerData?.notification && (
                  <IconButton size='large' color='inherit'>
                     <CIcon icon='tabler:bell' />
                  </IconButton>
               )}
               {/* user-menu  */}
               <Box>
                  <Tooltip title={status === "authenticated" ? "Open Settings" : "loading..."}>
                     <Box
                        {...(status === "authenticated" &&
                           headerData?.userMenu &&
                           headerData?.userMenu?.length > 0 && {
                              onClick: handleOpenUserMenu
                           })}
                        sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
                        <IconButton sx={{ p: 0 }}>
                           {status !== "authenticated" ? (
                              <LoadingButton
                                 loading={true}
                                 loadingIndicator={<CircularProgress color='inherit' size={16} />}
                              />
                           ) : (
                              <Avatar src={userAvatar ?? "https://placehold.co/40"} alt={userName ?? "user-avatar"} />
                           )}
                        </IconButton>
                        {/* drop-menu-indicator icon  */}
                        {status === "authenticated" && headerData?.userMenu && headerData?.userMenu?.length > 0 && (
                           <Box
                              sx={{
                                 display: "flex",
                                 alignItems: "flex-start",
                                 flexDirection: "column",
                                 maxWidth: "164px"
                              }}>
                              <Box
                                 sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    width: "100%",
                                    justifyContent: "space-between"
                                 }}>
                                 {anchorElUser ? (
                                    <CIcon
                                       icon={"solar:round-alt-arrow-up-outline"}
                                       sx={{
                                          color: theme.palette.text.primary
                                       }}
                                       fontSize={"24px"}
                                    />
                                 ) : (
                                    <CIcon
                                       icon={"solar:round-alt-arrow-down-outline"}
                                       sx={{
                                          color: theme.palette.text.primary
                                       }}
                                       fontSize={"24px"}
                                    />
                                 )}
                              </Box>
                           </Box>
                        )}
                     </Box>
                  </Tooltip>
                  {/* dropdown-menu  */}
                  {status === "authenticated" && headerData?.userMenu && headerData?.userMenu?.length > 0 && (
                     <Menu
                        sx={{
                           mt: "54px",
                           "& .MuiPaper-root": {
                              minWidth: "180px",
                              border: "1px solid",
                              borderColor: theme.palette.divider,
                              borderRadius: "12px",
                              background: theme.palette.background.default,
                              boxShadow: "0px 8px 28px -4px rgba(20, 28, 46, 0.08)"
                           }
                        }}
                        id='menu-appbar'
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                           vertical: "top",
                           horizontal: "right"
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "right"
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}>
                        {_.map(headerData?.userMenu, (setting: MenuItemProps, index: number) => {
                           return setting.link !== "/logout" ? (
                              <MenuItem
                                 key={index}
                                 onClick={handleCloseUserMenu}
                                 component={NextLink}
                                 href={setting?.link}
                                 target={setting?.target ?? "_self"}
                                 sx={{
                                    px: 3,
                                    gap: 2,
                                    textAlign: "left",
                                    color: theme.palette.text.primary,
                                    ":hover": {
                                       background: theme.palette.background.default,
                                       color: theme.palette.primary.main
                                    }
                                 }}>
                                 {setting?.icon && (
                                    <CIcon
                                       icon={setting?.icon}
                                       size={22}
                                       sx={{ color: theme.palette.text.primary + "60" }}
                                    />
                                 )}
                                 <Typography variant='body1'>{setting?.label}</Typography>
                              </MenuItem>
                           ) : (
                              <MenuItem
                                 key={index}
                                 onClick={() => {
                                    LogOutHandler()
                                    handleCloseUserMenu()
                                 }}
                                 sx={{
                                    color: theme.palette.text.primary,
                                    px: 3,
                                    gap: 2,
                                    textAlign: "left",
                                    ":hover": {
                                       background: theme.palette.error.light,
                                       color: theme.palette.error.dark
                                    }
                                 }}>
                                 {setting?.icon && (
                                    <CIcon
                                       icon={setting?.icon}
                                       size={22}
                                       sx={{ color: theme.palette.text.primary + "60" }}
                                    />
                                 )}
                                 <Typography variant='body1'>{setting?.label}</Typography>
                              </MenuItem>
                           )
                        })}
                     </Menu>
                  )}
               </Box>
            </Box>
         </Toolbar>
      </AppBar>
   )
}

export default CustomAppBar

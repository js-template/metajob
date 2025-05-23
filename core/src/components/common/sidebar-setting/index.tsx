"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
   Box,
   Drawer,
   IconButton,
   Tooltip,
   Typography,
   Divider,
   useTheme as muiTheme,
   ToggleButtonGroup,
   ToggleButton,
   Stack,
   Button,
   TextField
} from "@mui/material"
import CIcon from "../icon"
import { hexToRGBA } from "@/lib/hex-to-rgba"
import { useGlobalContext } from "@/context/store"
import { colorOptions } from "./data"
import { setCookie, getCookie } from "cookies-next"

const SidebarSetting = () => {
   const theme = muiTheme()
   const { theme: mode, setTheme } = useTheme()
   const { direction, changeDirection, setPrimaryColor } = useGlobalContext()

   const [open, setOpen] = useState(false)
   const [pmColor, setPmColor] = useState("")
   const [customColor, setCustomColor] = useState("")

   const toggleDrawer = (value: boolean) => () => {
      setOpen(value)
   }

   const handleChangeDirection = (value: "rtl" | "ltr") => {
      if (value && changeDirection) {
         changeDirection(value)
         window.location.reload()
      }
   }

   const handleColorChange = (color: string, type: "btn" | "custom") => {
      if (color && setPrimaryColor) {
         setPrimaryColor(color)
         setCookie("temp-color", color)
         if (type === "btn") {
            setCustomColor("")
            setPmColor(color)
         } else if (type === "custom") {
            setCustomColor(color)
            setPmColor("")
         }
      }
   }

   // get the primary color from cockie
   useEffect(() => {
      const getTempColor = getCookie("temp-color")
      if (getTempColor && setPrimaryColor) {
         setPrimaryColor(getTempColor)
      }
   }, [])

   return (
      <>
         {/* Floating Button */}
         {!open && (
            <Tooltip title='Settings'>
               <IconButton
                  onClick={toggleDrawer(true)}
                  sx={{
                     position: "fixed",
                     top: "50%",
                     [theme.direction === "rtl" ? "left" : "right"]: 16,
                     zIndex: 1300,
                     boxShadow: 3,
                     backgroundColor: theme.palette.primary.main,
                     color: theme.palette.primary.contrastText,
                     "&:hover": {
                        backgroundColor: theme.palette.primary.main
                     }
                  }}>
                  <CIcon
                     icon='uil:setting'
                     sx={{
                        color: theme.palette.primary.contrastText
                     }}
                  />
               </IconButton>
            </Tooltip>
         )}

         {/* Drawer */}
         <Drawer
            anchor={direction === "rtl" ? "left" : "right"}
            open={open}
            onClose={toggleDrawer(false)}
            ModalProps={{ keepMounted: true }}
            slotProps={{
               paper: {
                  sx: {
                     width: { xs: "100%", sm: 360 },
                     p: 2,
                     backgroundColor: theme.palette.background.default
                  }
               }
            }}
            sx={{
               position: "fixed",
               zIndex: 99999
            }}>
            {/* heading  */}
            <Box display='flex' justifyContent='space-between' alignItems='center'>
               <Typography variant='h6' sx={{ fontSize: 20 }}>
                  Template Settings
               </Typography>
               <IconButton onClick={toggleDrawer(false)}>
                  <CIcon
                     icon='tabler:x'
                     size={24}
                     sx={{
                        color: theme.palette.error.main,
                        cursor: "pointer"
                     }}
                  />
               </IconButton>
            </Box>
            <Divider sx={{ my: 2 }} />

            <Stack gap={3}>
               {/* Primary Color */}
               <Stack gap={1}>
                  <Typography
                     variant='body1'
                     fontWeight={500}
                     sx={{
                        color: theme.palette.text.secondary
                     }}>
                     Primary Color
                  </Typography>
                  <Box display='flex' gap={1} flexWrap='wrap'>
                     {colorOptions.map((color) => (
                        <Button
                           key={color}
                           onClick={() => {
                              handleColorChange(color, "btn")
                           }}
                           sx={{
                              p: 1,
                              minWidth: 0,
                              borderRadius: "8px",
                              border: pmColor === color ? `2px solid ${color}` : `1px solid ${theme.palette.divider}`,
                              bgcolor: "transparent",
                              "&:hover": {
                                 bgcolor: "transparent"
                              }
                           }}>
                           <Box
                              sx={{
                                 width: 32,
                                 height: 32,
                                 borderRadius: "8px",
                                 backgroundColor: color,
                                 cursor: "pointer"
                              }}
                           />
                        </Button>
                     ))}

                     {/* Color Picker */}
                     <Button
                        sx={{
                           p: 1,
                           minWidth: 0,
                           borderRadius: "8px",
                           border: customColor ? `2px solid ${customColor}` : `1px solid ${theme.palette.divider}`,
                           bgcolor: "transparent",
                           "&:hover": {
                              bgcolor: "transparent"
                           }
                        }}>
                        <TextField
                           type='color'
                           value={customColor}
                           onChange={(e) => {
                              handleColorChange(e.target.value, "custom")
                           }}
                           sx={{
                              p: 0,
                              minWidth: 32,
                              width: 32,
                              height: 32,
                              border: "none",
                              "& .MuiInputBase-input": {
                                 padding: 0,
                                 width: 32,
                                 height: 32
                              },
                              "& .MuiOutlinedInput-root": {
                                 bgcolor: "transparent",
                                 border: "none"
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                 border: "none"
                              }
                           }}
                           //   slotProps={{
                           //      input: {
                           //         startAdornment: <CIcon icon='uil:setting' size={24} />
                           //      }
                           //   }}
                        />
                     </Button>
                  </Box>
               </Stack>
               {/* Theme Mode */}
               <Stack gap={1}>
                  <Typography
                     variant='body1'
                     fontWeight={500}
                     sx={{
                        color: theme.palette.text.secondary
                     }}>
                     Theme
                  </Typography>
                  <ToggleButtonGroup
                     value={theme}
                     exclusive
                     onChange={(e, value) => value && setTheme(value)}
                     fullWidth>
                     <ToggleButton
                        value='light'
                        sx={{
                           bgcolor: mode === "light" ? hexToRGBA(theme.palette.primary.main, 0.1) : "transparent",
                           color: mode === "light" ? theme.palette.primary.main : theme.palette.text.secondary
                        }}>
                        <CIcon
                           icon={"ri:sun-fill"}
                           sx={{
                              color: "inherit"
                           }}
                        />
                     </ToggleButton>
                     <ToggleButton
                        value='dark'
                        sx={{
                           bgcolor: mode === "dark" ? hexToRGBA(theme.palette.primary.main, 0.1) : "transparent",
                           color: mode === "dark" ? theme.palette.primary.main : theme.palette.text.secondary
                        }}>
                        <CIcon
                           icon={"ri:moon-fill"}
                           sx={{
                              color: "inherit"
                           }}
                        />
                     </ToggleButton>
                     <ToggleButton
                        value='system'
                        sx={{
                           bgcolor: mode === "system" ? hexToRGBA(theme.palette.primary.main, 0.1) : "transparent",
                           color: mode === "system" ? theme.palette.primary.main : theme.palette.text.secondary
                        }}>
                        <CIcon
                           icon={"streamline:screen-2-solid"}
                           sx={{
                              color: "inherit"
                           }}
                        />
                     </ToggleButton>
                  </ToggleButtonGroup>
               </Stack>
               {/* Direction */}
               <Stack gap={1}>
                  <Typography
                     variant='body1'
                     fontWeight={500}
                     sx={{
                        color: theme.palette.text.secondary
                     }}>
                     Direction
                  </Typography>
                  <ToggleButtonGroup
                     color='primary'
                     value={direction}
                     exclusive
                     onChange={(e, value) => {
                        if (value) {
                           handleChangeDirection(value)
                        }
                     }}
                     fullWidth>
                     <ToggleButton value='ltr'>LTR</ToggleButton>
                     <ToggleButton value='rtl'>RTL</ToggleButton>
                  </ToggleButtonGroup>
               </Stack>
            </Stack>
         </Drawer>
      </>
   )
}

export default SidebarSetting

"use client"
import { Box, Collapse, ListItem, ListItemButton, ListItemText, useTheme } from "@mui/material"
import _ from "lodash"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import CIcon from "../../components/common/icon"
import NavLink from "./NavLink"
import { MenuItemProps } from "./types"

const NavGroupItem = ({ item, open, direction }: { item: MenuItemProps; open: boolean; direction: "ltr" | "rtl" }) => {
   const theme = useTheme()
   const pathname = usePathname()
   const [openGroup, setOpenGroup] = useState<boolean>(false)

   // *** if pathname matches the link, open the parent menu
   useEffect(() => {
      if (pathname === item.link) {
         setOpenGroup(true)
      }

      // *** or item.child find the pathname
      if (_.find(item.child, { link: pathname })) {
         setOpenGroup(true)
      }
   }, [item.child, item.link, pathname])

   return (
      <ListItem sx={{ display: "block", py: 0, mb: openGroup ? 0 : 1, px: 0 }}>
         <ListItemButton
            sx={{
               pl: 2.5,
               pr: 1,
               height: "38px",
               borderRadius: "6px",
               color: theme.palette.text.primary,
               display: "flex",
               gap: 1,
               "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,

                  "& svg": {
                     color: theme.palette.primary.contrastText + " !important"
                  }
               },
               ...(openGroup && {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,

                  "& svg": {
                     color: theme.palette.primary.contrastText + " !important"
                  }
               })
            }}
            onClick={() => setOpenGroup(!openGroup)}>
            <Box
               component={"span"}
               sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center"
               }}>
               {/* {item?.icon ? <CIcon icon={item.icon} size={22} /> : null} */}
               <ListItemText
                  primary={item.label}
                  sx={{
                     opacity: open ? 1 : 0,
                     "& .MuiTypography-root": {
                        fontSize: "16px",
                        fontWeight: 500
                     }
                  }}
               />
            </Box>
            <Box
               component={"span"}
               sx={{
                  flex: "none", // 'none' is not assignable to type 'FlexBasisProperty | undefined'
                  ml: direction === "ltr" ? "auto" : 0,
                  mr: direction === "ltr" ? 0 : "auto",
                  transform: openGroup ? "rotate(0deg)" : direction === "ltr" ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform 0.2s ease-in-out",
                  display: "flex",
                  alignItems: "center"
               }}>
               <CIcon icon='ri:arrow-down-s-line' />
            </Box>
            {/* badge */}
            {/* {item?.badge && <Chip label={item.badge} size='small' color='primary' />} */}
         </ListItemButton>
         <Collapse
            // @ts-ignore
            component='ul'
            in={openGroup}
            sx={{
               mt: openGroup ? 1 : 0,
               mx: 0,
               p: 0
            }}>
            {_.map(item?.child, (item: MenuItemProps, index: number) => {
               return <NavLink key={index} item={item} open={open} isChild direction={direction} />
            })}
         </Collapse>
      </ListItem>
   )
}

export default NavGroupItem

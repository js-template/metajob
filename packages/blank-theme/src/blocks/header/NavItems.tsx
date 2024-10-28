"use client"
import { Fragment } from "react"
import NavGroupItem from "./NavGroupItem"
import NavLink from "./NavLink"
import { MenuItemProps } from "./types"

const NavItems = (Items: MenuItemProps[], open: boolean, direction: "ltr" | "rtl") => {
   const RenderMenuItems = Items?.map((item: MenuItemProps, index: number) => {
      return item?.child && item?.child.length > 0 ? (
         <NavGroupItem key={index} item={item} open={open} direction={direction} />
      ) : (
         <NavLink key={index} item={item} open={open} direction={direction} />
      )
   })

   return <Fragment>{RenderMenuItems}</Fragment>
}

export default NavItems

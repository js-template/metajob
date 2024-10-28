"use client"
import { Fragment } from "react"
import NavGroupItem from "./NavGroupItem"
import NavLink from "./NavLink"
import { MenuItemProps } from "./type"

const NavItems = (Items: MenuItemProps[], open: boolean, direction: "ltr" | "rtl", signOut: () => Promise<void>) => {
   const RenderMenuItems = Items?.map((item: MenuItemProps, index: number) => {
      return item?.child && item?.child.length > 0 ? (
         <NavGroupItem key={index} item={item} open={open} direction={direction} signOut={signOut} />
      ) : (
         <NavLink key={index} item={item} open={open} direction={direction} signOut={signOut} />
      )
   })

   return <Fragment>{RenderMenuItems}</Fragment>
}

export default NavItems

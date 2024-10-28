"use client"
import { Icon, IconProps } from "@iconify/react"
import { Box, BoxProps } from "@mui/material"
type CIconProps = {
   color?: string
   hoverColor?: string
   size?: number
   icon: string
   sx?: BoxProps["sx"]
   iconProps?: IconProps
} & BoxProps
export default function CIcon({ color, hoverColor, size = 24, icon, sx, iconProps, ...props }: CIconProps) {
   return (
      <Box
         sx={{
            color: color ? color : (theme) => theme.palette.text.secondary,
            fontSize: size,
            "&:hover": {
               color: hoverColor
            },
            p: 0,
            m: 0,
            component: "span",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            ...sx
         }}
         {...props}>
         <Icon icon={icon} {...iconProps} />
      </Box>
   )
}

import type { SVGProps } from "react"

export function SpinnersClock(props: SVGProps<SVGSVGElement>) {
   return (
      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
         <path
            fill='currentColor'
            d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'></path>
         <rect width={2} height={7} x={11} y={6} fill='currentColor' rx={1}>
            <animateTransform
               attributeName='transform'
               dur='9s'
               repeatCount='indefinite'
               type='rotate'
               values='0 12 12;360 12 12'></animateTransform>
         </rect>
         <rect width={2} height={9} x={11} y={11} fill='currentColor' rx={1}>
            <animateTransform
               attributeName='transform'
               dur='0.75s'
               repeatCount='indefinite'
               type='rotate'
               values='0 12 12;360 12 12'></animateTransform>
         </rect>
      </svg>
   )
}

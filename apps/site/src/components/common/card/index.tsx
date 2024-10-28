"use client"
import { Stack, StackProps, SxProps, Theme } from "@mui/material"
import React from "react"

type CardProps = StackProps & {
   children: React.ReactNode
   sx?: SxProps<Theme>
}

export function Card({ children, sx, ...rest }: CardProps) {
   return (
      <Stack
         sx={{
            bgcolor: (theme) => theme.palette.background.paper,
            p: 1,
            borderRadius: "1rem",
            ...sx
         }}
         {...rest}>
         {children}
      </Stack>
   )
}

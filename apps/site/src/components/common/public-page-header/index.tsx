"use client"
import { hexToRGBA } from "../../../lib/hex-to-rgba"
import { Stack, Typography } from "@mui/material"
import { useTheme } from "next-themes"

export default function PageHeader({ title }: { title: string }) {
   const { theme: mode } = useTheme()
   return (
      <Stack position={"relative"}>
         <Stack
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               backgroundImage: "url(/images/jobs/findJob.png)",
               backgroundSize: "cover",
               backgroundPosition: "center",
               textAlign: "center",
               padding: "6rem 2rem",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor:
                     mode === "light"
                        ? (theme) => hexToRGBA(theme.palette.primary.main, 0.7)
                        : (theme) => hexToRGBA(theme.palette.background.paper, 0.7),
                  zIndex: 1
               },
               "& > *": {
                  position: "relative",
                  zIndex: 2
               }
            }}>
            <Typography
               fontSize={{ sm: 48, xs: 32 }}
               fontWeight={{ sm: 700, xs: 600 }}
               variant={"h1"}
               color={(theme) => theme.palette.primary.contrastText}>
               {title}
            </Typography>
         </Stack>
      </Stack>
   )
}

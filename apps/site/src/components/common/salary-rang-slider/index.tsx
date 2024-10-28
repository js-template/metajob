"use client"
import { Stack, TextField, Typography } from "@mui/material"
import Slider from "@mui/material/Slider"
import * as React from "react"
import CIcon from "../icon"

function valuetext(value: number) {
   return `${value}°C`
}

export default function RangeSlider() {
   const [value, setValue] = React.useState<number[]>([0, 50])

   const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[])
   }

   const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newMin = parseInt(event.target.value, 10)
      if (!isNaN(newMin)) {
         setValue([newMin, value[1]])
      }
   }

   const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newMax = parseInt(event.target.value, 10)
      if (!isNaN(newMax)) {
         setValue([value[0], newMax])
      }
   }
   return (
      <Stack spacing={2}>
         <Stack direction={"row"} justifyItems={"center"} justifyContent={"space-between"}>
            <Typography fontSize={16} fontWeight={700} color={"dark.main"}>
               Salary Range
            </Typography>
            <CIcon icon='clarity:minus-line' />
         </Stack>
         <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
         />
         <Stack direction={"row"} justifyContent={"space-between"}>
            <TextField
               value={value[0]}
               type='number'
               InputProps={{
                  startAdornment: (
                     <Typography fontSize={16} color='gray_1.main' fontWeight={400} pr={1}>
                        $
                     </Typography>
                  ),
                  inputProps: {
                     min: 0, // Minimum value
                     max: 100, // Maximum value
                     step: 1 // Increment step
                  }
               }}
               sx={{
                  "& .MuiOutlinedInput-root": {
                     "& .MuiInputBase-input": {
                        color: "gray_4.main"
                     }
                  }
               }}
               onChange={handleMinInputChange}
            />

            <TextField
               value={value[1]}
               type='number'
               InputProps={{
                  inputProps: {
                     min: 0,
                     max: 100,
                     step: 1
                  },
                  startAdornment: (
                     <Typography fontSize={16} color='gray_1.main' fontWeight={400} pr={1}>
                        $
                     </Typography>
                  )
               }}
               sx={{
                  "& .MuiOutlinedInput-root": {
                     "& .MuiInputBase-input": {
                        color: "gray_4.main"
                     }
                  }
               }}
               onChange={handleMaxInputChange}
            />
         </Stack>
      </Stack>
   )
}

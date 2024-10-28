"use client"
import { FormControl, TextField, TextFieldProps, Typography, TypographyProps } from "@mui/material"
type ITextFieldWithLabel = {
   label: string | JSX.Element
   placeholder?: string
   labelProps?: TypographyProps
   fullWidth?: boolean
   textFieldProps?: TextFieldProps
   textFieldSx?: TextFieldProps["sx"]
   type?: "text" | "email" | "password" | "number" | "tel" | "url" | "date" | "file" | "textarea"
   id?: string
   helperText?: string | JSX.Element
   size?: "small" | "medium"
   required?: boolean
   inputProps?: TextFieldProps["inputProps"]
}
export default function TextFieldWithLabel({
   label,
   placeholder,
   type = "text",
   labelProps,
   fullWidth,
   helperText,
   textFieldProps,
   textFieldSx,
   required = false,
   size = "medium",
   inputProps
}: ITextFieldWithLabel) {
   return (
      <FormControl fullWidth={fullWidth}>
         <Typography
            fontSize={14}
            fontWeight={400}
            color={(theme) => theme.palette.text.primary}
            pb={1}
            {...labelProps}>
            {label}{" "}
            {required && (
               <Typography component='span' color='error'>
                  *
               </Typography>
            )}
         </Typography>
         <TextField
            placeholder={placeholder}
            sx={{
               "& .MuiInputBase-root": {
                  py: "2px"
               },
               ...textFieldSx
            }}
            type={type}
            helperText={helperText}
            {...textFieldProps}
            size={size}
            inputProps={inputProps}
         />
      </FormControl>
   )
}

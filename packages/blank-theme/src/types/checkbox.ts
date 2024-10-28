import { SxProps } from "@mui/material"

export type ICheckboxProps = {
   label: string
   checked?: boolean
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
   sx?: SxProps
   fontSize?: number
   fontWeight?: number
   color?: string
}

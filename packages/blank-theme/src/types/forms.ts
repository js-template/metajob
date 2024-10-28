export type formProps = {
   title: string
   slug: string
   formStep: number
   stepLabels: {
      id: number
      title: string
   }[]
   buttonsText: formButtonsTextProps
   fields: (inputProps | selectProps | markdownProps | googleMapProps | fileInputProps)[]
}

export type formButtonsTextProps = {
   next: string
   back: string
   submit: string
   cancel: string
   skip: string
}

export type inputProps = {
   label: string
   name: string
   type: "text" | "email" | "password" | "number" | "tel" | "url" | "date" | "file" | "textarea"
   placeholder: string
   required: boolean
   defaultValue?: string
   fullWidth: boolean
   errorText: string
   mobileGrid: number
   desktopGrid: number
   tabGrid: number
   inputStep: number
   noteText: string
}

export type selectProps = {
   label: string
   name: string
   options: {
      id?: number
      value: string
      label: string
   }[]
   placeholder: string
   required: boolean
   fullWidth: boolean
   errorText: string
   mobileGrid: number
   desktopGrid: number
   tabGrid: number
   inputStep: number
   noteText: string
   model: string
   multiple: boolean
   defaultValue?: string
}

export type markdownProps = {
   label: string
   name: string
   required: boolean
   fullWidth: boolean
   errorText: string
   inputStep: number
   noteText: string
   defaultValue?: string
}

export type googleMapProps = {
   label: string
   name: string
   required: boolean
   errorText: string
   inputStep: number
   noteText: string
   defaultValue?: string
}

export type googleMapStateProps = {
   center: {
      lat: number
      lng: number
   }
   circle: {
      radius: number
      options: {
         strokeColor: string
      }
   }
   zoom: number
}

export type fileInputProps = {
   label: string
   name: string
   required: boolean
   fullWidth: boolean
   errorText: string
   mobileGrid: number
   defaultValue?: string
   desktopGrid: number
   tabGrid: number
   inputStep: number
   noteText: string
   multiple: boolean
   accept: string[]
}

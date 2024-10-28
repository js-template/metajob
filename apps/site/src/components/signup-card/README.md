# SignUpCard Component

The **SignUpCard** component a auth sign up page collect user from info and trigger function sended as props.

## Props

-  `signUpHandler`: A function that will receive data having `username`, `email`, `password`, `confirmPassword`
   properties.
-  `googleSignUpHandler`: A function that will be triggered when goggle icon button clicked.
-  `facebookSignUpHandler`: A function that will be triggered when facebook icon button clicked.
-  `linkedinSignUpHandler`: A function that will be triggered when linkedin icon button clicked.
-  `loading`: A boolean value for login loader.

## Usage

1. Import the `SignUpCard` component.
2. Pass related parameters.

### Example

```tsx
import SignUpCard from "@padma/metajob-ui"

const signUpHandler = (data: {username: string; email: string; password: string; confirmPassword: string}) => {
   // console.log(data)
}
const googleSignUpHandler = () => {
   //  google sign up function here
}
const facebookSignUpHandler = () => {
   //  facebook sign up function here
}
const linkedinSignUpHandler = () => {
   //  google sign up function here
}

<SignUpCard loading={loading} signUpHandler={signUpHandler} googleSignUpHandler={googleSignUpHandler} facebookSignUpHandler {facebookSignUpHandler} linkedinSignUpHandler={linkedinSignUpHandler}
/>

```

# LoginCard Component

The **LoginCard** component a auth login page collect user from info and trigger function sended as props.

## Props

- `loginHandler`: A function that will receive data having `username`, `password` properties.
- `googleLoginHandler`: A function that will be triggered when goggle icon button clicked.
- `facebookLoginHandler`: A function that will be triggered when facebook icon button clicked.
- `linkedinLoginHandler`: A function that will be triggered when linkedin icon button clicked.
- `loading`: A boolean value for login loader.
- `block`: A block data of `ILoginBLock` types.

## Usage

1. Import the `LoginCard` component.
2. Pass related parameters.

### Example

```tsx
import LoginCard from "@padma/metajob-ui"

const loginHandler = (data: { username: string; password: string }) => {
}
const googleLoginHandler = () => {
   //  google login function here
}
const facebookLoginHandler = () => {
   //  facebook login function here
}
const linkedinLoginHandler = () => {
   //  linkedin login function here
}

const blockData ={
   title: "Sign in with Email address",
   ...
//   other value from  ILoginBLock type
}

<SignUpCard block={blockData} loading={loading} loginHandler={loginHandler} googleSignUpHandler={googleLoginHandler} facebookLoginHandler {facebookLoginHandler} linkedinLoginHandler={linkedinLoginHandler}
/>

```

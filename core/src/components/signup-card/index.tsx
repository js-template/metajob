"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useTheme } from "next-themes"
import { LoadingButton } from "@mui/lab"
import {
   Button,
   Box,
   Container,
   Divider,
   Grid,
   IconButton,
   Stack,
   Typography,
   Skeleton,
   useTheme as MuiTheme
} from "@mui/material"
import { hexToRGBA } from "../../lib/hex-to-rgba"
import { Card } from "../common/card"
import CIcon from "../common/icon"
// @ts-ignore
import TextFieldWithLabel from "../textField-with-label"
import { find } from "@/lib/strapi"
import { IRegisterBLock, IUserRole } from "./types"

type ISignUp = { username: string; email: string; password: string; confirmPassword: string }

type Props = {
   signUpHandler?: (data: ISignUp) => void
   googleSignUpHandler?: () => void
   facebookSignUpHandler?: () => void
   linkedinSignUpHandler?: () => void
   loading?: boolean
   block: IRegisterBLock
}

export const SignUpCard = ({
   loading,
   signUpHandler,
   googleSignUpHandler,
   facebookSignUpHandler,
   linkedinSignUpHandler,
   block
}: Props) => {
   const theme = MuiTheme()
   const { theme: mode } = useTheme()

   // destructured register block data
   const {
      title: registerTitle,
      username_title,
      username_placeholder,
      email_title,
      email_placeholder,
      password_title,
      password_placeholder,
      confirm_password_title,
      confirm_password_placeholder,
      required_placeholder,
      button_placeholder,
      or_placeholder,
      login_helper_placeholder,
      login_link_placeholder,
      provider_option,
      style
   } = block || {}
   const { backgroundColor, color, secondary_color, section_padding } = style || {}

   const [selectedButton, setSelectedButton] = useState(0)

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
   } = useForm<ISignUp>()

   //    submit handler
   const onSubmitHandler = async (data: ISignUp) => {
      if (signUpHandler) {
         const signUpdata = {
            ...data,
            role: selectedButton
         }
         // await signUpHandler(data)
         await signUpHandler(signUpdata)
         reset()
      }
   }

   const [isLoading, setIsLoading] = useState(false)
   const [allRoles, setAllRoles] = useState<IUserRole[] | null>(null)

   // *** get all roles
   const getRoles = async () => {
      setIsLoading(true)
      const { data, error } = await find(
         "api/users-permissions/roles",
         {
            filters: {
               type: {
                  $or: [{ $ne: "public" }, { $ne: "authenticated" }]
               }
            }
         },
         "no-cache"
      )
      if (error) {
         setIsLoading(false)
         return setAllRoles([])
      } else {
         // without the public role and the authenticated role
         const roles = data?.roles
            .filter((role: any) => role.type !== "public" && role.type !== "authenticated")
            ?.reverse()
         setAllRoles(roles)
         setSelectedButton(roles?.[0]?.id)
         setIsLoading(false)
      }
   }

   useEffect(() => {
      getRoles()
   }, [])

   return (
      <Stack
         sx={{
            bgcolor: (theme) =>
               mode === "light" ? backgroundColor || theme.palette.background.default : theme.palette.background.default
         }}>
         <Container
            maxWidth='lg'
            sx={{
               py: section_padding || 8
            }}>
            <Stack justifyContent={"center"} alignItems={"center"}>
               <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
                  <Grid item md={5} sm={6} xs={12}>
                     <Card
                        sx={{
                           p: {
                              xs: 3,
                              sm: 5
                           }
                        }}>
                        <Stack spacing={4}>
                           <Typography
                              fontSize={24}
                              fontWeight={400}
                              textAlign={"center"}
                              sx={{
                                 color: (theme) =>
                                    mode === "light" ? color || theme.palette.text.primary : theme.palette.text.primary
                              }}>
                              {registerTitle || "Create an account"}
                           </Typography>
                           <Stack direction={"row"} gap={2}>
                              {!isLoading &&
                                 allRoles?.map((roleItem: IUserRole, index: number) => (
                                    <Button
                                       key={index}
                                       variant='contained'
                                       fullWidth
                                       onClick={() => setSelectedButton(roleItem?.id)}
                                       sx={{
                                          bgcolor:
                                             selectedButton === roleItem?.id
                                                ? (theme) => theme.palette.primary.main
                                                : (theme) => hexToRGBA(theme.palette.text.disabled, 0.2),
                                          color: (theme) =>
                                             mode === "dark"
                                                ? theme.palette.primary.contrastText
                                                : selectedButton === roleItem?.id
                                                  ? theme.palette.primary.contrastText
                                                  : theme.palette.text.disabled,
                                          textTransform: "capitalize"
                                       }}>
                                       {roleItem?.name}
                                    </Button>
                                 ))}
                              {isLoading &&
                                 [1, 2]?.map((_, index) => (
                                    <Skeleton key={index} variant='rounded' width={"100%"} height={48} />
                                 ))}

                              {/* <Button
                              variant='contained'
                              fullWidth
                              onClick={() => setSelectedButton("candidate")}
                              sx={{
                                 bgcolor:
                                    selectedButton === "candidate"
                                       ? (theme) => theme.palette.primary.main
                                       : (theme) => hexToRGBA(theme.palette.text.disabled, 0.2),
                                 color: (theme) =>
                                    mode === "dark"
                                       ? theme.palette.primary.contrastText
                                       : selectedButton === "candidate"
                                         ? theme.palette.primary.contrastText
                                         : theme.palette.text.disabled
                              }}>
                              Candidate
                           </Button>
                           <Button
                              fullWidth
                              sx={{
                                 bgcolor:
                                    selectedButton === "employer"
                                       ? (theme) => theme.palette.primary.main
                                       : (theme) => hexToRGBA(theme.palette.text.disabled, 0.2),
                                 color: (theme) =>
                                    mode === "dark"
                                       ? theme.palette.primary.contrastText
                                       : selectedButton === "employer"
                                         ? theme.palette.primary.contrastText
                                         : theme.palette.text.disabled
                              }}
                              variant='contained'
                              onClick={() => setSelectedButton("employer")}>
                              Employer
                           </Button> */}
                           </Stack>
                           <Stack spacing={2} component={"form"} onSubmit={handleSubmit(onSubmitHandler)}>
                              <TextFieldWithLabel
                                 label={username_title || "Username"}
                                 type='text'
                                 placeholder={username_placeholder || "Enter Username"}
                                 textFieldProps={{
                                    id: "username",
                                    ...register("username", {
                                       required: required_placeholder || "This field is required"
                                    }),
                                    error: !!errors.username
                                 }}
                                 helperText={errors.username?.message as string | ""}
                                 labelProps={{
                                    color:
                                       mode === "light"
                                          ? color || theme.palette.text.primary
                                          : theme.palette.text.primary
                                 }}
                              />
                              <TextFieldWithLabel
                                 label={email_title || "Email"}
                                 placeholder={email_placeholder || "Your Email"}
                                 type='email'
                                 textFieldProps={{
                                    id: "email",
                                    ...register("email", {
                                       required: required_placeholder || "This field is required"
                                    }),
                                    error: !!errors.email
                                 }}
                                 helperText={errors.email?.message as string | ""}
                                 labelProps={{
                                    color:
                                       mode === "light"
                                          ? color || theme.palette.text.primary
                                          : theme.palette.text.primary
                                 }}
                              />
                              <TextFieldWithLabel
                                 label={password_title || "Password"}
                                 placeholder={password_placeholder || "Enter Password"}
                                 type='password'
                                 textFieldProps={{
                                    id: "password",
                                    ...register("password", {
                                       required: required_placeholder || "This field is required"
                                    }),
                                    error: !!errors.password
                                 }}
                                 helperText={errors.password?.message as string | ""}
                                 labelProps={{
                                    color:
                                       mode === "light"
                                          ? color || theme.palette.text.primary
                                          : theme.palette.text.primary
                                 }}
                              />
                              <TextFieldWithLabel
                                 label={confirm_password_title || "Confirm Password"}
                                 placeholder={confirm_password_placeholder || "Enter Confirm Password"}
                                 type='password'
                                 textFieldProps={{
                                    id: "confirmPassword",
                                    ...register("confirmPassword", {
                                       required: required_placeholder || "This field is required"
                                    }),
                                    error: !!errors.confirmPassword
                                 }}
                                 helperText={errors.confirmPassword?.message as string | ""}
                                 labelProps={{
                                    color:
                                       mode === "light"
                                          ? color || theme.palette.text.primary
                                          : theme.palette.text.primary
                                 }}
                              />
                              <LoadingButton
                                 type='submit'
                                 variant='contained'
                                 loading={loading ? loading : false}
                                 loadingPosition='start'
                                 size='large'
                                 sx={{
                                    marginTop: "30px !important"
                                 }}>
                                 {button_placeholder || "Register"}
                              </LoadingButton>
                           </Stack>
                           <Typography
                              variant='body2'
                              fontSize={14}
                              fontWeight={400}
                              sx={{
                                 color: (theme) =>
                                    mode === "light"
                                       ? secondary_color || theme.palette.text.secondary
                                       : theme.palette.text.secondary,
                                 mt: 2,
                                 textAlign: "center"
                              }}>
                              {login_helper_placeholder || "Already have account ?"}{" "}
                              <Typography
                                 component={Link}
                                 href='/login'
                                 fontSize={14}
                                 fontWeight={400}
                                 sx={{
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color: (theme) => theme.palette.primary.main
                                 }}>
                                 {login_link_placeholder || "Login"}
                              </Typography>
                           </Typography>
                           {/* provider title  */}
                           {provider_option && (
                              <Box
                                 sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    marginTop: "20px !important"
                                 }}>
                                 <Divider
                                    orientation='horizontal'
                                    sx={{
                                       flexGrow: 1,
                                       borderColor: (theme) =>
                                          mode === "light"
                                             ? hexToRGBA(secondary_color || theme.palette.text.disabled, 0.4) ||
                                               hexToRGBA(theme.palette.text.disabled, 0.4)
                                             : hexToRGBA(theme.palette.text.disabled, 0.4)
                                    }}
                                 />

                                 <Button
                                    variant='outlined'
                                    sx={{
                                       cursor: "unset",
                                       m: 2,
                                       py: 0.5,
                                       px: 7,
                                       fontWeight: 500,
                                       borderRadius: "10px",
                                       "&.Mui-disabled": {
                                          borderColor: (theme) =>
                                             mode === "light"
                                                ? hexToRGBA(secondary_color || theme.palette.text.disabled, 0.4) ||
                                                  hexToRGBA(theme.palette.text.disabled, 0.4)
                                                : hexToRGBA(theme.palette.text.disabled, 0.4),
                                          color: (theme) =>
                                             mode === "light"
                                                ? hexToRGBA(secondary_color || theme.palette.text.disabled, 0.4) ||
                                                  hexToRGBA(theme.palette.text.disabled, 0.4)
                                                : hexToRGBA(theme.palette.text.disabled, 0.4)
                                       }
                                    }}
                                    disableRipple
                                    disabled>
                                    {or_placeholder || "OR"}
                                 </Button>

                                 <Divider
                                    orientation='horizontal'
                                    sx={{
                                       flexGrow: 1,
                                       borderColor: (theme) =>
                                          mode === "light"
                                             ? hexToRGBA(secondary_color || theme.palette.text.disabled, 0.4) ||
                                               hexToRGBA(theme.palette.text.disabled, 0.4)
                                             : hexToRGBA(theme.palette.text.disabled, 0.4)
                                    }}
                                 />
                              </Box>
                           )}
                           {/* signUp providers  */}
                           {provider_option && (
                              <Box
                                 sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 2,
                                    marginTop: "15px !important"
                                 }}>
                                 {googleSignUpHandler && (
                                    <IconButton
                                       size='large'
                                       color='secondary'
                                       sx={{
                                          p: 1,
                                          borderRadius: 2,
                                          border: "1px solid",
                                          // google color
                                          borderColor: "#DB4437"
                                       }}
                                       onClick={() => {
                                          if (googleSignUpHandler) {
                                             googleSignUpHandler()
                                          }
                                       }}>
                                       <CIcon icon='flat-color-icons:google' />
                                    </IconButton>
                                 )}
                                 {/* Facebook */}
                                 {facebookSignUpHandler && (
                                    <IconButton
                                       size='large'
                                       color='secondary'
                                       sx={{
                                          p: 1,
                                          borderRadius: 2,
                                          border: "1px solid",
                                          // facebook color
                                          borderColor: "#3B5998"
                                       }}
                                       onClick={() => {
                                          if (facebookSignUpHandler) {
                                             facebookSignUpHandler()
                                          }
                                       }}>
                                       <CIcon icon='logos:facebook' />
                                    </IconButton>
                                 )}
                                 {/* LinkedIn */}
                                 {linkedinSignUpHandler && (
                                    <IconButton
                                       size='large'
                                       color='secondary'
                                       sx={{
                                          p: 1,
                                          borderRadius: 2,
                                          border: "1px solid",
                                          // linkedin color
                                          borderColor: "#0077B5"
                                       }}
                                       onClick={() => {
                                          if (linkedinSignUpHandler) {
                                             linkedinSignUpHandler()
                                          }
                                       }}>
                                       <CIcon
                                          icon='entypo-social:linkedin-with-circle'
                                          sx={{
                                             // linkedin color
                                             color: "#0077B5"
                                          }}
                                       />
                                    </IconButton>
                                 )}
                              </Box>
                           )}
                        </Stack>
                     </Card>
                  </Grid>
               </Grid>
            </Stack>
         </Container>
      </Stack>
   )
}

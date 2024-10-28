"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useTheme } from "next-themes"
import { LoadingButton } from "@mui/lab"
import { Button, Box, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material"
import { hexToRGBA } from "../../lib/hex-to-rgba"
import { Card } from "../common/card"
import CIcon from "../common/icon"
// @ts-ignore
import TextFieldWithLabel from "../textField-with-label"

type ISignUp = { username: string; email: string; password: string; confirmPassword: string }

type Props = {
   signUpHandler?: (data: ISignUp) => void
   googleSignUpHandler?: () => void
   facebookSignUpHandler?: () => void
   linkedinSignUpHandler?: () => void
   loading?: boolean
}

export const SignUpCard = ({
   loading,
   signUpHandler,
   googleSignUpHandler,
   facebookSignUpHandler,
   linkedinSignUpHandler
}: Props) => {
   const [selectedButton, setSelectedButton] = useState("candidate")
   const { theme: mode } = useTheme()

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
   } = useForm<ISignUp>()

   //    submit handler
   const onSubmitHandler = async (data: ISignUp) => {
      if (signUpHandler) {
         await signUpHandler(data)
         reset()
      }
   }

   //    provider present validator
   const noProvider = !googleSignUpHandler && !facebookSignUpHandler && !linkedinSignUpHandler

   return (
      <Container maxWidth='lg' sx={{ py: 8 }}>
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
                           color={(theme) => theme.palette.text.primary}>
                           Create an account
                        </Typography>
                        <Stack direction={"row"} gap={2}>
                           <Button
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
                           </Button>
                        </Stack>
                        <Stack spacing={2} component={"form"} onSubmit={handleSubmit(onSubmitHandler)}>
                           <TextFieldWithLabel
                              label='Username'
                              type='text'
                              placeholder='Enter Username'
                              textFieldProps={{
                                 id: "username",
                                 ...register("username", {
                                    required: "This field is required"
                                 }),
                                 error: !!errors.username
                              }}
                              helperText={errors.username?.message as string | ""}
                           />
                           <TextFieldWithLabel
                              label='Email'
                              placeholder='Your Email'
                              type='email'
                              textFieldProps={{
                                 id: "email",
                                 ...register("email", {
                                    required: "This field is required"
                                 }),
                                 error: !!errors.email
                              }}
                              helperText={errors.email?.message as string | ""}
                           />
                           <TextFieldWithLabel
                              label='Password'
                              placeholder='Enter Password'
                              type='password'
                              textFieldProps={{
                                 id: "password",
                                 ...register("password", {
                                    required: "This field is required"
                                 }),
                                 error: !!errors.password
                              }}
                              helperText={errors.password?.message as string | ""}
                           />
                           <TextFieldWithLabel
                              label='Confirm Password'
                              placeholder='Enter Confirm Password'
                              type='password'
                              textFieldProps={{
                                 id: "confirmPassword",
                                 ...register("confirmPassword", {
                                    required: "This field is required"
                                 }),
                                 error: !!errors.confirmPassword
                              }}
                              helperText={errors.confirmPassword?.message as string | ""}
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
                              Register
                           </LoadingButton>
                        </Stack>
                        <Typography
                           variant='body2'
                           color={(theme) => theme.palette.text.secondary}
                           fontSize={14}
                           fontWeight={400}
                           sx={{
                              mt: 2,
                              textAlign: "center"
                           }}>
                           Already have account ?{" "}
                           <Typography
                              component={Link}
                              href='/login'
                              color={(theme) => theme.palette.primary.main}
                              fontSize={14}
                              fontWeight={400}
                              sx={{
                                 textDecoration: "none",
                                 cursor: "pointer"
                              }}>
                              Login
                           </Typography>
                        </Typography>
                        {/* provider title  */}
                        {!noProvider && (
                           <Box
                              sx={{
                                 alignItems: "center",
                                 display: "flex",
                                 marginTop: "20px !important"
                              }}>
                              <Divider sx={{ flexGrow: 1 }} orientation='horizontal' />

                              <Button
                                 variant='outlined'
                                 sx={{
                                    cursor: "unset",
                                    m: 2,
                                    py: 0.5,
                                    px: 7,
                                    fontWeight: 500,
                                    borderRadius: "10px"
                                 }}
                                 disableRipple
                                 disabled>
                                 OR
                              </Button>

                              <Divider sx={{ flexGrow: 1 }} orientation='horizontal' />
                           </Box>
                        )}
                        {/* signUp providers  */}
                        {!noProvider && (
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
   )
}

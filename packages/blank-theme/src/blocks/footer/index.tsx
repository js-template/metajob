"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material"
import { hexToRGBA } from "../../lib/hex-to-rgba"
import CIcon from "../../components/common/icon"
import { FooterBlockProps } from "./type"

export const Footer = ({ data }: FooterBlockProps) => {
   const getFullYear = new Date().getFullYear()
   const { theme: mode } = useTheme()

   const { FooterOne, FooterTwo, FooterThree, FooterFour, FooterBottom, copyright, FooterGrid } = data || {}
   const {
      title: FooterOneTitle,
      description: FooterOneDescription,
      location: FooterOneLocation,
      phone: FooterOnePhone,
      email: FooterOneEmail,
      style: FooterOneStyle
   } = FooterOne || {}

   const { title: FooterTwoTitle, FooterMenu: FooterTwoFooterMenu, style: FooterTwoStyle } = FooterTwo || {}
   const { title: FooterThreeTitle, FooterMenu: FooterThreeFooterMenu, style: FooterThreeStyle } = FooterThree || {}
   const { title: FooterFourTitle, FooterMenu: FooterFourFooterMenu, style: FooterFourStyle } = FooterFour || {}
   const { brand_name, social_link } = FooterBottom || {}

   return (
      <Stack
         sx={{
            bgcolor: (theme) => (mode === "dark" ? theme.palette.background.paper : theme.palette.text.primary)
            //   mt: 4
         }}>
         {/* subscribe section */}
         {/* <Stack
                  sx={{
                      display: {
                          xs: 'flex',
                          md: 'grid'
                      },
                      gridTemplateColumns: '1fr 2fr',
                  }}
              >
  
                  <Typography
                      variant='h1'
                      noWrap
                      sx={{
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                          fontSize: 32,
                          fontWeight: 700,
                          textDecoration: "none",
                          color: (theme) => theme.palette.primary.contrastText,
                          flexGrow: 1,
  
                      }}
                  >
                      Meta <Box component={'span'} sx={{ color: (theme) => theme.palette.primary.main, pl: 1 }}>Jobs</Box>
                  </Typography>
                  <Stack bgcolor={'primary.main'}>
                      <Stack maxWidth={'md'}>
                          <Stack px={8} py={2} direction={{ sm: 'row', xs: 'column' }} gap={4} alignItems={'center'}>
                              <Typography color={(theme) => theme.palette.primary.contrastText} fontWeight={700} fontSize={40} >
                                  {footerTopData?.title}
                              </Typography>
                              <TextField
                                  placeholder={footerTopData?.search?.searchByWords}
                                  fullWidth
                                  InputProps={{
                                      endAdornment: <Button
                                          sx={{
                                              px: 4,
                                              backgroundColor: mode === 'dark' ? (theme) => theme.palette.background.default : (theme) => theme.palette.text.primary,
                                              color: (theme) => theme.palette.primary.contrastText,
                                              '&:hover': {
                                                  backgroundColor: (theme) => theme.palette.primary.main
                                              }
                                          }}
  
                                          variant="contained"
                                      >
                                          {footerTopData?.search?.button}
                                      </Button>
                                  }}
                              />
                          </Stack>
                      </Stack>
                  </Stack>
              </Stack> */}
         <Container maxWidth='lg' sx={{ py: 4 }}>
            {FooterGrid > 0 && (
               <Grid container spacing={4}>
                  <Grid item xs={FooterOneStyle?.mobile} sm={FooterOneStyle?.tab} md={FooterOneStyle?.desktop}>
                     <Stack
                        gap={2}
                        pr={{
                           xs: 0,
                           md: 4
                        }}>
                        <Typography
                           fontSize={24}
                           fontWeight={700}
                           color={(theme) => theme.palette.primary.contrastText}>
                           {FooterOneTitle}
                        </Typography>
                        <Typography
                           fontSize={18}
                           fontWeight={400}
                           color={(theme) => hexToRGBA(theme.palette.primary.contrastText, 0.5)}>
                           {FooterOneDescription}
                        </Typography>
                        <Stack direction='row' gap={2} alignItems={"center"}>
                           {FooterOneLocation?.icon && <CIcon icon={FooterOneLocation?.icon} color='primary.main' />}

                           <Typography
                              fontSize={18}
                              fontWeight={400}
                              color={(theme) => theme.palette.primary.contrastText}>
                              {FooterOneLocation?.title}
                           </Typography>
                        </Stack>
                        <Stack direction='row' gap={2} alignItems={"center"}>
                           {FooterOnePhone?.icon && <CIcon icon={FooterOnePhone?.icon} color='primary.main' />}

                           <Typography
                              fontSize={18}
                              fontWeight={400}
                              color={(theme) => theme.palette.primary.contrastText}
                              component={"a"}
                              href='tel:1-202-555-0106'
                              sx={{
                                 textDecoration: "none"
                              }}>
                              {FooterOnePhone?.title}
                           </Typography>
                        </Stack>
                        <Stack direction='row' gap={2} alignItems={"center"}>
                           {FooterOneEmail?.icon && <CIcon icon={FooterOneEmail?.icon} color='primary.main' />}

                           <Typography
                              fontSize={18}
                              fontWeight={400}
                              color={(theme) => theme.palette.primary.contrastText}
                              component={"a"}
                              href='mailto:info@example.com'
                              sx={{
                                 textDecoration: "none"
                              }}>
                              {FooterOneEmail?.title}
                           </Typography>
                        </Stack>
                     </Stack>
                  </Grid>
                  {FooterGrid > 1 && (
                     <Grid item xs={FooterTwoStyle?.mobile} sm={FooterTwoStyle?.tab} md={FooterTwoStyle?.desktop}>
                        <Stack gap={2}>
                           <Typography
                              fontSize={24}
                              fontWeight={700}
                              color={(theme) => theme.palette.primary.contrastText}>
                              {FooterTwoTitle}
                           </Typography>
                           <Stack gap={2}>
                              {FooterTwoFooterMenu?.map((item: any) => (
                                 <Typography
                                    key={item?.id}
                                    fontSize={16}
                                    fontWeight={400}
                                    color={(theme) => hexToRGBA(theme.palette.primary.contrastText, 0.5)}
                                    component={Link}
                                    href={item?.link ?? "#"}
                                    target={item?.target ?? "_self"}
                                    sx={{
                                       textDecoration: "none",
                                       "&:hover": {
                                          color: (theme) => theme.palette.primary.main
                                       }
                                    }}>
                                    {item?.label ?? "No Label"}
                                 </Typography>
                              ))}
                           </Stack>
                        </Stack>
                     </Grid>
                  )}
                  {FooterGrid > 2 && (
                     <Grid item xs={FooterThreeStyle?.mobile} sm={FooterThreeStyle?.tab} md={FooterThreeStyle?.desktop}>
                        <Stack gap={2}>
                           <Typography
                              fontSize={24}
                              fontWeight={700}
                              color={(theme) => theme.palette.primary.contrastText}>
                              {FooterThreeTitle}
                           </Typography>
                           <Stack gap={2}>
                              {FooterThreeFooterMenu?.map((item: any) => (
                                 <Typography
                                    key={item?.id}
                                    fontSize={16}
                                    fontWeight={400}
                                    color={(theme) => hexToRGBA(theme.palette.primary.contrastText, 0.5)}
                                    href={item?.link ?? "#"}
                                    target={item?.target ?? "_self"}
                                    sx={{
                                       textDecoration: "none",
                                       "&:hover": {
                                          color: (theme) => theme.palette.primary.main
                                       }
                                    }}
                                    component={Link}>
                                    {item?.label ?? "No Label"}
                                 </Typography>
                              ))}
                           </Stack>
                        </Stack>
                     </Grid>
                  )}
                  {FooterGrid > 3 && (
                     <Grid item xs={FooterFourStyle?.mobile} sm={FooterFourStyle?.tab} md={FooterFourStyle?.desktop}>
                        <Stack gap={2}>
                           <Typography
                              fontSize={24}
                              fontWeight={700}
                              color={(theme) => theme.palette.primary.contrastText}>
                              {FooterFourTitle}
                           </Typography>
                           <Stack gap={2}>
                              {FooterFourFooterMenu?.map((item: any) => (
                                 <Typography
                                    key={item?.id}
                                    fontSize={16}
                                    fontWeight={400}
                                    color={(theme) => hexToRGBA(theme.palette.primary.contrastText, 0.5)}
                                    href={item?.link ?? "#"}
                                    target={item?.target ?? "_self"}
                                    sx={{
                                       textDecoration: "none",
                                       "&:hover": {
                                          color: (theme) => theme.palette.primary.main
                                       }
                                    }}
                                    component={Link}>
                                    {item?.label ?? "No Label"}
                                 </Typography>
                              ))}
                           </Stack>
                        </Stack>
                     </Grid>
                  )}
               </Grid>
            )}
            {copyright && (
               <>
                  {FooterGrid > 0 && (
                     <Divider
                        color={"#FFF"}
                        sx={{
                           my: 4
                           //mx: 4
                        }}
                     />
                  )}
                  <Stack
                     direction={"row"}
                     justifyContent={"space-between"}
                     // px={4}
                  >
                     <Typography
                        fontSize={16}
                        fontWeight={400}
                        color={(theme) => theme.palette.primary.contrastText}
                        textAlign='center'>
                        © {getFullYear} {brand_name} | All Right Reserved
                     </Typography>
                     {/* <Stack direction={'row'} gap={2}>
                          <Box
                              component={'a'}
                              href='https://www.facebook.com/'
                              target='_blank'
                          >
                              <CIcon
                                  icon='ri:facebook-fill'
                                  color='primary.contrastText'
                                  size={28}
  
                              />
                          </Box>
                          <Box
                              component={'a'}
                              href='https://www.twitter.com/'
                              target='_blank'
                          >
                              <CIcon
                                  icon='ri:twitter-fill'
                                  color='primary.contrastText'
                                  size={28}
  
                              />
                          </Box>
                          <Box
                              component={'a'}
                              href='https://youtube.com/'
                              target='_blank'
                          >
                              <CIcon
                                  icon='ant-design:youtube-filled'
                                  color='primary.contrastText'
                                  size={28}
                                  sx={{
                                      cursor: 'pointer'
                                  }}
  
                              />
                          </Box>
                          <Box
                              component={'a'}
                              href='https://www.linkedin.com/'
                              target='_blank'
                          >
                              <CIcon
                                  icon='la:linkedin-in'
                                  color='primary.contrastText'
                                  size={28}
                                  sx={{
                                      cursor: 'pointer'
                                  }}
  
                              />
                          </Box>
                      </Stack> */}
                     {social_link && (
                        <Stack direction={"row"} gap={2}>
                           {social_link?.map((item) => (
                              <Box key={item?.id} component={"a"} href={item?.link} target={item?.target ?? "_blank"}>
                                 {item?.icon && <CIcon icon={item?.icon} color='primary.contrastText' size={28} />}
                              </Box>
                           ))}
                        </Stack>
                     )}
                  </Stack>
               </>
            )}
         </Container>
      </Stack>
   )
}

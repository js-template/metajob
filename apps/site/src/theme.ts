"use client"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { createTheme } from "@mui/material"
import { Jost } from "next/font/google"
const jost = Jost({
   weight: ["300", "400", "500", "600", "700"],
   display: "swap",
   subsets: ["latin"]
})

const lightTheme = createTheme({
   palette: {
      mode: "light",
      primary: {
         main: "#1CAF57",
         light: "#007C32",
         contrastText: "#FFFFFF"
      },
      secondary: {
         main: "#13161C",
         contrastText: "#FFFFFF"
      },
      info: {
         main: "#3CC6FC",
         contrastText: "#ffffff"
      },
      warning: {
         main: "#FB8B2F",
         light: "#FFA621",
         contrastText: "#ffffff"
      },
      error: {
         main: "#FF4646",
         contrastText: "#FFFFFF"
      },
      success: {
         main: "#1CAF57",
         light: "#007C32",
         contrastText: "#FFFFFF"
      },
      text: {
         primary: "#13161C", // dark
         secondary: "#8F9CA9", // gray 2
         disabled: "#66737F" // gray 3
         // #36414C // gray 4
      },
      divider: "#E5E7EB",
      background: {
         default: "#F8F7FA",
         paper: "#FFFFFF"
      }
   },
   direction: "ltr",
   typography: {
      fontFamily: jost.style.fontFamily,
      h1: {
         fontWeight: 700,
         fontSize: 35
      },
      h2: {
         fontWeight: 700,
         fontSize: 30
      },
      h3: {
         fontWeight: 700,
         fontSize: 25,
         lineHeight: 1.4
      },
      h4: {
         fontWeight: 700,
         fontSize: 16
      },
      h5: {
         fontWeight: 700,
         fontSize: 14
      },
      h6: {
         fontSize: 15
      },
      body1: {
         fontSize: 18,
         fontWeight: 400
      },
      body2: {
         fontSize: 14,
         fontWeight: 400
      },
      button: {
         fontWeight: 400,
         fontSize: 16
      },
      caption: {
         fontSize: 13,
         fontWeight: 400,
         textTransform: "uppercase"
      },
      subtitle1: {
         fontSize: 14,
         fontWeight: 400
      },
      subtitle2: {
         fontWeight: 400,
         fontSize: 15
      },
      overline: {
         fontSize: 13,
         fontWeight: 700,
         textTransform: "uppercase"
      }
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 750,
         md: 1200,
         lg: 1405,
         xl: 1840
      }
   },
   spacing: 9,
   mixins: {
      toolbar: {
         minHeight: 60
      }
   },
   components: {
      // MuiTypography: {
      //    defaultProps: {
      //       variantMapping: {
      //          h1: "h1",
      //          h2: "h2",
      //          h3: "div",
      //          h4: "div",
      //          h5: "div",
      //          h6: "div",
      //          subtitle1: "div",
      //          subtitle2: "div",
      //          body1: "div",
      //          body2: "div"
      //       }
      //    },
      //    styleOverrides: {
      //       gutterBottom: {
      //          marginBottom: 4
      //       },
      //       paragraph: {
      //          fontSize: 18,
      //          lineHeight: 1.7
      //       }
      //    }
      // },
      MuiButton: {
         defaultProps: {
            disableRipple: true
         },
         styleOverrides: {
            root: ({ theme }) => ({
               fontWeight: 500,
               textTransform: "none",
               paddingLeft: 16,
               paddingRight: 16,
               fontSize: 18,
               borderRadius: 6,
               boxShadow: "none",
               ".MuiSvgIcon-root": {
                  transition: "all .2s"
               },
               "&:hover": {
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.primary.contrastText
               }
            }),
            endIcon: {
               marginRight: -8
            },
            sizeSmall: {
               padding: "6px 16px",
               lineHeight: 1.5
            },
            sizeMedium: {
               padding: "8px 20px"
            },
            sizeLarge: {
               padding: "11px 24px"
            },
            textSizeSmall: {
               padding: "7px 12px"
            },
            textSizeMedium: {
               padding: "9px 16px"
            },
            textSizeLarge: {
               padding: "12px 16px"
            }
         }
      },
      MuiLink: {
         defaultProps: {
            underline: "hover"
         }
      },
      MuiOutlinedInput: {
         styleOverrides: {
            root: ({ theme, ownerState }) => ({
               backgroundColor: theme.palette.background.default,
               borderRadius: 6,
               border: "none",
               fontWeight: 400,
               fontSize: 18,
               color: theme.palette.text.disabled,
               "& fieldset": {
                  border: "none"
               },
               "&.Mui-focused fieldset": {
                  border: "none"
               },
               ...(ownerState.size === "small" && {
                  padding: 0
               })
            }),
            input: ({ theme }) => ({
               color: theme.palette.text.primary,
               "&::placeholder": {
                  color: theme.palette.text.disabled,
                  opacity: 1.5
               }
            })
         }
      },
      MuiSelect: {
         defaultProps: {
            IconComponent: KeyboardArrowDownIcon
         },

         styleOverrides: {
            icon: ({ theme }) => ({
               marginRight: ".5rem",
               color: theme.palette.text.secondary
            }),
            select: ({ theme }) => ({
               "&.MuiSelect-standard": {
                  backgroundColor: theme.palette.background.default,
                  "&:focus": {
                     // backgroundColor: '#0ff',
                  }
               }
            }),
            root: ({ theme, ownerState }) => ({
               //color: 'gray_3.main',
               fontWeight: 400,
               backgroundColor: theme.palette.background.paper,
               fontSize: 18,
               paddingLeft: 2,
               ...(ownerState.size === "small" && {
                  padding: 0,
                  margin: 0
               }),

               // outlined variant style overrides
               "&.MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  borderColor: theme.palette.divider + " !important",
                  border: "1px solid",
                  borderRadius: 6,
                  padding: "0px",
                  "& .MuiSelect-outlined": {
                     padding: "11px 16px"
                  },
                  // error border color
                  "&.Mui-error": {
                     borderColor: theme.palette.error.main + " !important"
                  },
                  // focused border color
                  "&.Mui-focused": {
                     borderColor: theme.palette.primary.main + " !important"
                  },
                  // hover border color
                  "&:hover": {
                     borderColor: theme.palette.primary.main + " !important"
                  }
               }
            })
         }
      },
      // TextField outlined variant style overrides
      MuiTextField: {
         defaultProps: {
            variant: "outlined"
         },
         styleOverrides: {
            root: ({ theme }) => ({
               borderRadius: 6,
               "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  borderColor: theme.palette.divider + " !important",
                  border: "1px solid",
                  borderRadius: 6,
                  // focused border color
                  "&.Mui-focused": {
                     borderColor: theme.palette.primary.main + " !important"
                  },
                  // error border color
                  "&.Mui-error": {
                     borderColor: theme.palette.error.main + " !important"
                  },
                  // hover border color
                  "&:hover": {
                     borderColor: theme.palette.primary.main + " !important"
                  },
                  // placeholder color
                  "& input::placeholder": {
                     color: theme.palette.text.secondary,
                     opacity: 1.5
                  },
                  // textarea style overrides
                  "& textarea": {
                     padding: "12px 16px"
                  }
               }
            })
         }
      },
      // Autocomplete style overrides
      MuiAutocomplete: {
         styleOverrides: {
            root: ({ theme }) => ({
               borderRadius: 6,
               "& .MuiInputBase-root": {
                  padding: "8px 10px !important",

                  // error border color
                  "&.Mui-error": {
                     borderColor: theme.palette.error.main + " !important"
                  }
               }
            })
         }
      },
      MuiStepIcon: {
         styleOverrides: {
            root: ({ theme }) => ({
               color: theme.palette.text.secondary // Text color inside the circle
               // '&.Mui-active': {

               // },
               // '&.Mui-completed': {
               //    color: 'white', // Text color inside the circle
               //    backgroundColor: '#f00', // Background color of the completed step
               //    borderRadius: '50%',
               //    padding: '8px' // Adjust padding if needed
               // },
               // Add more styles for other states if needed
            })
         }
      }
   }
})

const darkTheme = createTheme({
   palette: {
      mode: "dark",
      primary: {
         main: "#1CAF57",
         light: "#007C32",
         contrastText: "#FFFFFF"
      },
      secondary: {
         main: "#000000",
         contrastText: "#FFFFFF"
      },
      info: {
         main: "#3CC6FC",
         contrastText: "#ffffff"
      },
      warning: {
         main: "#FB8B2F",
         light: "#FFA621",
         contrastText: "#ffffff"
      },
      error: {
         main: "#FF4646",
         contrastText: "#FFFFFF"
      },
      success: {
         main: "#1CAF57",
         light: "#007C32",
         contrastText: "#FFFFFF"
      },
      divider: "#3a3a3a",
      text: {
         primary: "#FFFFFF", // white
         secondary: "#8F9CA9", // gray 2
         disabled: "#66737F" // gray 3
      },

      background: {
         default: "#000000",
         paper: "#13161C"
      }
   },
   direction: "ltr",
   typography: {
      fontFamily: jost.style.fontFamily,
      h1: {
         fontWeight: 700,
         fontSize: 35
      },
      h2: {
         fontWeight: 700,
         fontSize: 30
      },
      h3: {
         fontWeight: 700,
         fontSize: 25,
         lineHeight: 1.4
      },
      h4: {
         fontWeight: 700,
         fontSize: 16
      },
      h5: {
         fontWeight: 700,
         fontSize: 14
      },
      h6: {
         fontSize: 15
      },
      body1: {
         fontSize: 18,
         fontWeight: 400
      },
      body2: {
         fontSize: 14,
         fontWeight: 400
      },
      button: {
         fontWeight: 600,
         fontSize: 16
      },
      caption: {
         fontSize: 13,
         fontWeight: 400,
         textTransform: "uppercase"
      },
      subtitle1: {
         fontSize: 14,
         fontWeight: 400
      },
      subtitle2: {
         fontWeight: 400,
         fontSize: 15
      },
      overline: {
         fontSize: 13,
         fontWeight: 700,
         textTransform: "uppercase"
      }
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 750,
         md: 1200,
         lg: 1405,
         xl: 1840
      }
   },
   spacing: 9,
   mixins: {
      toolbar: {
         minHeight: 60
      }
   },
   components: {
      // MuiTypography: {
      //    defaultProps: {
      //       variantMapping: {
      //          h1: "h1",
      //          h2: "h2",
      //          h3: "div",
      //          h4: "div",
      //          h5: "div",
      //          h6: "div",
      //          subtitle1: "div",
      //          subtitle2: "div",
      //          body1: "div",
      //          body2: "div"
      //       }
      //    },
      //    styleOverrides: {
      //       gutterBottom: {
      //          marginBottom: 4
      //       },
      //       paragraph: {
      //          fontSize: 18,
      //          lineHeight: 1.7
      //       }
      //    }
      // },
      MuiButton: {
         defaultProps: {
            disableRipple: true
         },
         styleOverrides: {
            root: ({ theme }) => ({
               fontWeight: 500,
               textTransform: "none",
               paddingLeft: 16,
               paddingRight: 16,
               fontSize: 18,
               borderRadius: 6,
               boxShadow: "none",
               ".MuiSvgIcon-root": {
                  transition: "all .2s"
               },
               "&:hover": {
                  //  backgroundColor: theme.palette.text.primary,
                  //  color: theme.palette.primary.contrastText,
               }
            }),
            endIcon: {
               marginRight: -8
            },
            sizeSmall: {
               padding: "6px 16px",
               lineHeight: 1.5
            },
            sizeMedium: {
               padding: "8px 20px"
            },
            sizeLarge: {
               padding: "11px 24px"
            },
            textSizeSmall: {
               padding: "7px 12px"
            },
            textSizeMedium: {
               padding: "9px 16px"
            },
            textSizeLarge: {
               padding: "12px 16px"
            }
         }
      },
      MuiLink: {
         defaultProps: {
            underline: "hover"
         }
      },
      MuiOutlinedInput: {
         styleOverrides: {
            root: ({ theme, ownerState }) => ({
               backgroundColor: theme.palette.background.default,
               borderRadius: 6,
               border: "none",
               fontWeight: 400,
               fontSize: 18,
               color: theme.palette.text.disabled,
               "& fieldset": {
                  border: "none"
               },
               "&.Mui-focused fieldset": {
                  border: "none"
               },
               ...(ownerState.size === "small" && {
                  padding: 0
               })
            }),
            input: ({ theme }) => ({
               color: theme.palette.text.primary,
               "&::placeholder": {
                  color: theme.palette.text.disabled,
                  opacity: 1.5
               }
            })
         }
      },
      MuiSelect: {
         defaultProps: {
            IconComponent: KeyboardArrowDownIcon
         },

         styleOverrides: {
            icon: ({ theme }) => ({
               marginRight: ".5rem",
               color: theme.palette.text.secondary
            }),
            select: ({ theme }) => ({
               "&.MuiSelect-standard": {
                  backgroundColor: theme.palette.background.default,
                  "&:focus": {
                     // backgroundColor: '#0ff',
                  }
               }
            }),
            root: ({ theme, ownerState }) => ({
               //color: 'gray_3.main',
               fontWeight: 400,
               backgroundColor: theme.palette.background.paper,
               fontSize: 18,
               paddingLeft: 2,
               ...(ownerState.size === "small" && {
                  padding: "8px 14px",
                  margin: 0
               }),

               // outlined variant style overrides
               "&.MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  borderColor: theme.palette.divider + " !important",
                  border: "1px solid",
                  borderRadius: 6,
                  padding: "0px",
                  "& .MuiSelect-outlined": {
                     padding: "11px 16px"
                  },
                  // error border color
                  "&.Mui-error": {
                     borderColor: theme.palette.error.main + " !important"
                  },
                  // focused border color
                  "&.Mui-focused": {
                     borderColor: theme.palette.primary.main + " !important"
                  },
                  // hover border color
                  "&:hover": {
                     borderColor: theme.palette.primary.main + " !important"
                  }
               }
            })
         }
      },
      // TextField outlined variant style overrides
      MuiTextField: {
         defaultProps: {
            variant: "outlined"
         },
         styleOverrides: {
            root: ({ theme }) => ({
               borderRadius: 6,
               "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  borderColor: theme.palette.divider + " !important",
                  border: "1px solid",
                  borderRadius: 6,
                  // focused border color
                  "&.Mui-focused": {
                     borderColor: theme.palette.primary.main + " !important"
                  },
                  // error border color
                  "&.Mui-error": {
                     borderColor: theme.palette.error.main + " !important"
                  },
                  // hover border color
                  "&:hover": {
                     borderColor: theme.palette.primary.main + " !important"
                  },
                  // placeholder color
                  "& input::placeholder": {
                     color: theme.palette.text.secondary,
                     opacity: 1.5
                  },
                  // textarea style overrides
                  "& textarea": {
                     padding: "12px 16px"
                  }
               }
            })
         }
      },
      // Autocomplete style overrides
      MuiAutocomplete: {
         styleOverrides: {
            root: ({ theme }) => ({
               borderRadius: 6,
               "& .MuiInputBase-root": {
                  padding: "8px 10px !important",

                  // error border color
                  "&.Mui-error": {
                     borderColor: theme.palette.error.main + " !important"
                  }
               }
            })
         }
      },
      MuiStepIcon: {
         styleOverrides: {
            root: ({ theme }) => ({
               color: theme.palette.text.secondary // Text color inside the circle
               // '&.Mui-active': {

               // },
               // '&.Mui-completed': {
               //    color: 'white', // Text color inside the circle
               //    backgroundColor: '#f00', // Background color of the completed step
               //    borderRadius: '50%',
               //    padding: '8px' // Adjust padding if needed
               // },
               // Add more styles for other states if needed
            })
         }
      }
   }
})

export { darkTheme, lightTheme }

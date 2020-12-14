import { extendTheme } from '@chakra-ui/react'

/**
 * This theme object can be changed and edited however you like. It's currently extending the default Chakra theme
 * (which itself is inspired by Tailwind CSS) with the values below.
 * Example usage of theme values: <Text color="brand.100" fontSize="6xl" fontWeight="bold">Boop</Text>
 */
export const theme = extendTheme({
  colors: {
    brand: {
      50: '#e2f3ff',
      100: '#bedaf3',
      200: '#98bfe6',
      300: '#71a6d9',
      400: '#4b8ccd',
      500: '#3273b4',
      600: '#25598d',
      700: '#174066',
      800: '#092640',
      900: '#000e1c',
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  breakpoints: ['30em', '48em', '62em', '80em'],

  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "md",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "brand.100" : "brand.500",
      },
    }),
  },


})



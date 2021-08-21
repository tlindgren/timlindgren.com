import { extendTheme } from "@chakra-ui/react";

/**
 * This theme object can be changed and edited however you like. It's currently extending the default Chakra theme
 * (which itself is inspired by Tailwind CSS) with the values below.
 * Example usage of theme values: <Text color="brand.100" fontSize="6xl" fontWeight="bold">Boop</Text>
 */
export const theme = extendTheme({
  colors: {
    brand: {
      25: "#F0F8FE",
      50: "#e2f3ff",
      100: "#bedaf3",
      200: "#98bfe6",
      300: "#71a6d9",
      400: "#4b8ccd",
      500: "#3273b4",
      600: "#25598d",
      700: "#174066",
      800: "#092640",
      900: "#000e1c",
    },
  },
  fonts: {
    heading: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],

  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "md",
        color: props.colorMode === "dark" ? "white" : "Black",
        lineHeight: "tall",
        bg: props.colorMode === "dark" ? "brand.700" : "white",
      },
      a: {
        color: props.colorMode === "dark" ? "brand.100" : "brand.500",
      },
      ul: {
        paddingLeft: "20px",
      },
      p: {
        fontSize: "lg",
        mb: "4",
      },
      ".mdx": {
        h1: {
          fontSize: "5xl",
          mb: "4",
          fontWeight: "800",
        },
        h2: {
          fontSize: "4xl",
          mb: "4",
          fontWeight: "700",
        },
        h3: {
          fontSize: "3xl",
          mb: "2",
          mt: "4",
          fontWeight: "700",
        },
        a: {
          textDecoration: "underline",
          color: props.colorMode === "dark" ? "brand.100" : "brand.500",
        },
        pre: {
          backgroundColor: props.colorMode === "dark" ? "blue.500" : "blue.100",
          borderRadius: "lg",
          p: "3",
          my: "6",
          maxWidth: "100%",
          overflowX: "scroll",
        },
        hr: {
          mt: "10",
          mb: "6",
          borderColor: props.colorMode === "dark" ? "blue.100" : "blue.800",
          borderWidth: "1px",
        },
      },
    }),
  },
});

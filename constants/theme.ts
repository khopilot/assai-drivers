import { Platform } from "react-native";

export const theme = {
  colors: {
    primary: "#C2B19D", // Main beige/sand color
    secondary: "#8A7A5F", // Darker beige for accents
    text: "#333333", // Dark gray for text
    textLight: "#666666", // Lighter gray for secondary text
    background: "#F8F5F2", // Off-white for backgrounds
    backgroundLight: "#F0EBE4", // Lighter beige for card backgrounds
    white: "#FFFFFF",
    border: "#E5E0D8", // Light beige for borders
    success: "#4A6741", // Dark green
    error: "#A35555", // Dark red
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 20,
    round: 9999,
  },
  shadows: {
    small: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    large: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
  },
  fonts: {
    heading: {
      regular: Platform.select({
        ios: "Georgia",
        android: "serif",
        default: "Georgia, serif"
      }),
      bold: Platform.select({
        ios: "Georgia-Bold",
        android: "serif-bold",
        default: "Georgia-Bold, serif"
      }),
      italic: Platform.select({
        ios: "Georgia-Italic",
        android: "serif-italic",
        default: "Georgia-Italic, serif"
      }),
    },
    body: {
      regular: Platform.select({
        ios: "Helvetica Neue",
        android: "sans-serif",
        default: "Helvetica Neue, sans-serif"
      }),
      medium: Platform.select({
        ios: "HelveticaNeue-Medium",
        android: "sans-serif-medium",
        default: "Helvetica Neue Medium, sans-serif"
      }),
      semiBold: Platform.select({
        ios: "HelveticaNeue-Semibold",
        android: "sans-serif-medium",
        default: "Helvetica Neue Semibold, sans-serif"
      }),
      bold: Platform.select({
        ios: "HelveticaNeue-Bold",
        android: "sans-serif-bold",
        default: "Helvetica Neue Bold, sans-serif"
      }),
    }
  }
};
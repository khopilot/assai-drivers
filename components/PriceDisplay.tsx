import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/constants/theme";

interface PriceDisplayProps {
  price: number | string | null;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => {
  if (price === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.placeholder}>--</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        {typeof price === "number" ? `${price}€` : `${price}€`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 36,
    color: theme.colors.text,
  },
  placeholder: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 36,
    color: theme.colors.textLight,
  },
});
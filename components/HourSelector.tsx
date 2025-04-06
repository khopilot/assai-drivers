import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "@/constants/theme";
import { Minus, Plus } from "lucide-react-native";

interface HourSelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const HourSelector: React.FC<HourSelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 10,
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, value <= min && styles.buttonDisabled]}
        onPress={handleDecrement}
        disabled={value <= min}
      >
        <Minus size={20} color={value <= min ? theme.colors.textLight : theme.colors.text} />
      </TouchableOpacity>
      
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.unit}>heures</Text>
      </View>
      
      <TouchableOpacity
        style={[styles.button, value >= max && styles.buttonDisabled]}
        onPress={handleIncrement}
        disabled={value >= max}
      >
        <Plus size={20} color={value >= max ? theme.colors.textLight : theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.backgroundLight,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  valueContainer: {
    marginHorizontal: 20,
    alignItems: "center",
  },
  value: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 28,
    color: theme.colors.text,
  },
  unit: {
    fontFamily: theme.fonts.body.regular,
    fontSize: 14,
    color: theme.colors.textLight,
    marginTop: 4,
  },
});
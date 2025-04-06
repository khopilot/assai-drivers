import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from "react-native";
import { theme } from "@/constants/theme";
import { Phone, Mail } from "lucide-react-native";

interface StyledButtonProps {
  title: string;
  onPress: () => void;
  primary?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: "phone" | "mail";
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  title,
  onPress,
  primary = false,
  style,
  textStyle,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary ? styles.primaryButton : styles.secondaryButton,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && (
        <View style={styles.iconContainer}>
          {icon === "phone" && <Phone size={18} color={primary ? theme.colors.white : theme.colors.primary} />}
          {icon === "mail" && <Mail size={18} color={primary ? theme.colors.white : theme.colors.primary} />}
        </View>
      )}
      <Text
        style={[
          styles.buttonText,
          primary ? styles.primaryButtonText : styles.secondaryButtonText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: theme.borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    fontFamily: theme.fonts.body.semiBold,
    fontSize: 16,
  },
  primaryButtonText: {
    color: theme.colors.white,
  },
  secondaryButtonText: {
    color: theme.colors.primary,
  },
  iconContainer: {
    marginRight: 10,
  },
});
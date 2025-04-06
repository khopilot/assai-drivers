import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useLanguageStore } from "@/stores/languageStore";
import { theme } from "@/constants/theme";

export const LanguageSelector: React.FC = () => {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <TouchableOpacity 
      style={styles.languageToggle} 
      onPress={toggleLanguage}
      activeOpacity={0.7}
    >
      <Text style={styles.languageText}>
        {language.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  languageToggle: {
    backgroundColor: theme.colors.backgroundLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  languageText: {
    fontFamily: theme.fonts.body.medium,
    fontSize: 14,
    color: theme.colors.text,
  }
});
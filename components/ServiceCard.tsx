import React from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { theme } from "@/constants/theme";
import { useLanguageStore } from "@/stores/languageStore";

interface ServiceCardProps {
  name: string;
  description: string;
  image: ImageSourcePropType;
  hourlyRate: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  image,
  hourlyRate,
}) => {
  const { t } = useLanguageStore();

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.name}>{t(name)}</Text>
        <Text style={styles.description}>{t(description)}</Text>
        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>{t('serviceCard.hourlyRateLabel')}</Text>
          <Text style={styles.rateValue}>{hourlyRate}€</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    overflow: "hidden",
    marginBottom: 20,
    ...theme.shadows.medium,
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 20,
  },
  name: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 22,
    color: theme.colors.text,
    marginBottom: 8,
  },
  description: {
    fontFamily: theme.fonts.body.regular,
    fontSize: 15,
    color: theme.colors.text,
    lineHeight: 22,
    marginBottom: 16,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.backgroundLight,
    padding: 12,
    borderRadius: theme.borderRadius.md,
  },
  rateLabel: {
    fontFamily: theme.fonts.body.medium,
    fontSize: 14,
    color: theme.colors.text,
  },
  rateValue: {
    fontFamily: theme.fonts.body.bold,
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: 8,
  },
});
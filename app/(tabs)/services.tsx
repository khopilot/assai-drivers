import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { vehicleCategories, hourlyRates } from "@/data/servicesData";
import { theme } from "@/constants/theme";
import { ServiceCard } from "@/components/ServiceCard";
import { useLanguageStore } from "@/stores/languageStore";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function ServicesScreen() {
  const { t } = useLanguageStore();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <LanguageSelector />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('services.title')}</Text>
          <Text style={styles.subtitle}>
            {t('services.subtitle')}
          </Text>
        </View>

        <View style={styles.servicesContainer}>
          {vehicleCategories.map((category) => (
            <ServiceCard
              key={category.id}
              name={category.name}
              description={category.description}
              image={category.image}
              hourlyRate={hourlyRates[category.id]}
            />
          ))}
        </View>

        <View style={styles.additionalInfo}>
          <Text style={styles.infoTitle}>{t('services.additional')}</Text>
          <Text style={styles.infoText}>
            • {t('services.service1')}
          </Text>
          <Text style={styles.infoText}>
            • {t('services.service2')}
          </Text>
          <Text style={styles.infoText}>
            • {t('services.service3')}
          </Text>
          <Text style={styles.infoText}>
            • {t('services.service4')}
          </Text>
          <Text style={styles.infoText}>
            • {t('services.service5')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerSpacer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 28,
    color: theme.colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: theme.fonts.body.regular,
    fontSize: 16,
    color: theme.colors.textLight,
    lineHeight: 24,
  },
  servicesContainer: {
    marginBottom: 32,
  },
  additionalInfo: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  infoTitle: {
    fontFamily: theme.fonts.heading.regular,
    fontSize: 20,
    color: theme.colors.text,
    marginBottom: 16,
  },
  infoText: {
    fontFamily: theme.fonts.body.regular,
    fontSize: 15,
    color: theme.colors.text,
    marginBottom: 10,
    lineHeight: 22,
  },
});
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { brandValues } from "@/data/servicesData";
import { theme } from "@/constants/theme";
import { StyledButton } from "@/components/StyledButton";
import { useLanguageStore } from "@/stores/languageStore";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function HomeScreen() {
  const router = useRouter();
  const { t } = useLanguageStore();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <LanguageSelector />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroContainer}>
          <Image
            source={require('@/assets/images/Untitled design (8).png')}
            style={styles.heroImage}
          />
          {/* <LinearGradient
            colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.7)"]}
            style={styles.overlay}
          /> */}
          {/* <View style={styles.logoContainer}>
            <View style={styles.logoPlaceholder}>
              <Text style={styles.logoText}>ASAÏ</Text>
            </View>
          </View> */}
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{t('home.title')}</Text>
          <Text style={styles.tagline}>{t('home.tagline')}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>{t('home.engagement')}</Text>
          <View style={styles.valuePoints}>
            {brandValues.points.map((point, index) => (
              <View key={index} style={styles.valuePoint}>
                <View style={styles.bullet} />
                <Text style={styles.valueText}>{point}</Text>
              </View>
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <StyledButton
              title={t('home.estimate')}
              onPress={() => router.push("/estimate")}
              primary
            />
            <StyledButton
              title={t('home.discover')}
              onPress={() => router.push("/services")}
              style={{ marginTop: 12 }}
            />
          </View>
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
  header: {
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
    flexGrow: 1,
  },
  heroContainer: {
    height: 300,
    width: "100%",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  logoPlaceholder: {
    width: 200,
    height: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 48,
    color: theme.colors.white,
    letterSpacing: 2,
  },
  contentContainer: {
    padding: 24,
  },
  title: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 28,
    color: theme.colors.text,
    textAlign: "center",
    marginBottom: 8,
  },
  tagline: {
    fontFamily: theme.fonts.body.regular,
    fontSize: 16,
    color: theme.colors.textLight,
    textAlign: "center",
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.primary,
    width: 60,
    alignSelf: "center",
    marginVertical: 24,
  },
  sectionTitle: {
    fontFamily: theme.fonts.heading.regular,
    fontSize: 22,
    color: theme.colors.text,
    marginBottom: 16,
  },
  valuePoints: {
    marginBottom: 32,
  },
  valuePoint: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    marginRight: 12,
  },
  valueText: {
    fontFamily: theme.fonts.body.medium,
    fontSize: 15,
    color: theme.colors.text,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 8,
  },
});
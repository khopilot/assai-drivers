import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { contactDetails, brandValues } from "@/data/servicesData";
import { theme } from "@/constants/theme";
import { Phone, Mail, Globe, MapPin, MessageCircle } from "lucide-react-native";
import { useLanguageStore } from "@/stores/languageStore";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function ContactScreen() {
  const { t } = useLanguageStore();

  const handlePhoneCall = () => {
    Linking.openURL(`tel:${contactDetails.phoneFormatted}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${contactDetails.email}`);
  };

  const handleWebsite = () => {
    if (contactDetails.website) {
      Linking.openURL(contactDetails.website);
    }
  };

  const handleWhatsApp = () => {
    Linking.openURL("https://wa.me/33756861976");
  };

  const handleTelegram = () => {
    Linking.openURL("https://web.telegram.org/k/#6273018378");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <LanguageSelector />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('contact.title')}</Text>
          <Text style={styles.subtitle}>
            {t('contact.subtitle')}
          </Text>
        </View>

        <View style={styles.contactCard}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>ASAÏ</Text>
          </View>
          
          <Text style={styles.companyName}>{brandValues.title}</Text>
          
          <TouchableOpacity style={styles.contactItem} onPress={handlePhoneCall}>
            <Phone size={20} color={theme.colors.primary} />
            <Text style={styles.contactText}>0756861976</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
            <Mail size={20} color={theme.colors.primary} />
            <Text style={styles.contactText}>asai.elitechauffeur@gmail.com</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleWhatsApp}>
            <MessageCircle size={20} color={theme.colors.primary} />
            <Text style={styles.contactText}>WhatsApp</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleTelegram}>
            <MessageCircle size={20} color={theme.colors.primary} />
            <Text style={styles.contactText}>Telegram</Text>
          </TouchableOpacity>
          
          <View style={styles.contactItem}>
            <MapPin size={20} color={theme.colors.primary} />
            <Text style={styles.contactText}>{t('contact.location')}</Text>
          </View>
        </View>

        <View style={styles.mapContainer}>
          <Text style={styles.sectionTitle}>{t('contact.serviceArea')}</Text>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1000" }}
            style={styles.mapImage}
            contentFit="cover"
          />
          <Text style={styles.mapCaption}>
            {t('contact.mapCaption')}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{t('contact.hours')}</Text>
          <Text style={styles.infoText}>
            {t('contact.hoursText')}
          </Text>
          
          <Text style={[styles.infoTitle, {marginTop: 20}]}>{t('contact.booking')}</Text>
          <Text style={styles.infoText}>
            {t('contact.bookingText')}
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
  contactCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 24,
  },
  logoPlaceholder: {
    width: 120,
    height: 60,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
  },
  logoText: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 24,
    color: theme.colors.white,
  },
  companyName: {
    fontFamily: theme.fonts.heading.bold,
    fontSize: 20,
    color: theme.colors.text,
    marginBottom: 24,
    textAlign: "center",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    width: "100%",
  },
  contactText: {
    fontFamily: theme.fonts.body.medium,
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: 12,
  },
  mapContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: theme.fonts.heading.regular,
    fontSize: 20,
    color: theme.colors.text,
    marginBottom: 16,
  },
  mapImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  mapCaption: {
    fontFamily: theme.fonts.body.regular,
    fontSize: 14,
    color: theme.colors.textLight,
    marginTop: 8,
    textAlign: "center",
    fontStyle: "italic",
  },
  infoContainer: {
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  infoTitle: {
    fontFamily: theme.fonts.heading.regular,
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 8,
  },
  infoText: {
    fontFamily: theme.fonts.body.regular,
    fontSize: 15,
    color: theme.colors.text,
    lineHeight: 22,
  },
});
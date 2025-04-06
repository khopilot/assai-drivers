import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Linking, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { predefinedRoutes, hourlyRates, contactDetails } from "@/data/servicesData";
import { theme } from "@/constants/theme";
import { StyledButton } from "@/components/StyledButton";
import { CustomPicker } from "@/components/CustomPicker";
import { PriceDisplay } from "@/components/PriceDisplay";
import { RadioButton } from "@/components/RadioButton";
import { HourSelector } from "@/components/HourSelector";
import { useLanguageStore } from "@/stores/languageStore";
import { LanguageSelector } from "@/components/LanguageSelector";

type ServiceType = "route" | "hourly";
type VehicleCategory = "eco" | "business" | "van";

export default function EstimateScreen() {
  const { t } = useLanguageStore();
  const [serviceType, setServiceType] = useState<ServiceType>("route");
  const [selectedRoute, setSelectedRoute] = useState(predefinedRoutes[0].id);
  const [vehicleCategory, setVehicleCategory] = useState<VehicleCategory>("business");
  const [hours, setHours] = useState(2);
  const [estimatedPrice, setEstimatedPrice] = useState<number | string | null>(null);

  useEffect(() => {
    calculatePrice();
  }, [serviceType, selectedRoute, vehicleCategory, hours]);

  const calculatePrice = () => {
    if (serviceType === "route") {
      const route = predefinedRoutes.find(r => r.id === selectedRoute);
      if (route) {
        setEstimatedPrice(route.prices[vehicleCategory]);
      }
    } else {
      setEstimatedPrice(hourlyRates[vehicleCategory] * hours);
    }
  };

  const handlePhoneCall = () => {
    Linking.openURL(`tel:${contactDetails.phoneFormatted}`);
  };

  const handleEmail = () => {
    const subject = t('estimate.emailSubject');
    let body = "";
    
    if (serviceType === "route") {
      const route = predefinedRoutes.find(r => r.id === selectedRoute);
      const translatedRouteLabel = route ? t(route.label) : '';
      const translatedCategoryName = t(`vehicle.${vehicleCategory}.name`);
      body = t('estimate.emailBodyRoute')
        .replace('{route}', translatedRouteLabel)
        .replace('{category}', translatedCategoryName)
        .replace('{price}', `${estimatedPrice}€`);
    } else {
      const translatedCategoryName = t(`vehicle.${vehicleCategory}.name`);
      body = t('estimate.emailBodyHourly')
        .replace('{hours}', hours.toString())
        .replace('{category}', translatedCategoryName)
        .replace('{price}', `${estimatedPrice}€`);
    }
    
    Linking.openURL(`mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <LanguageSelector />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('estimate.title')}</Text>
          <Text style={styles.subtitle}>
            {t('estimate.subtitle')}
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>{t('estimate.serviceType')}</Text>
            <View style={styles.radioGroup}>
              <RadioButton
                label={t('estimate.predefinedRoute')}
                selected={serviceType === "route"}
                onSelect={() => setServiceType("route")}
              />
              <RadioButton
                label={t('estimate.hourlyService')}
                selected={serviceType === "hourly"}
                onSelect={() => setServiceType("hourly")}
              />
            </View>
          </View>

          {serviceType === "route" ? (
            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>{t('estimate.selectRoute')}</Text>
              <CustomPicker
                items={predefinedRoutes.map(route => ({
                  label: route.label,
                  value: route.id,
                }))}
                selectedValue={selectedRoute}
                onValueChange={(value) => setSelectedRoute(value)}
              />
            </View>
          ) : (
            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>{t('estimate.hours')}</Text>
              <HourSelector
                value={hours}
                onChange={setHours}
                min={1}
                max={10}
              />
            </View>
          )}

          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>{t('estimate.vehicleCategory')}</Text>
            <View style={styles.radioGroup}>
              <RadioButton
                label={t('vehicle.eco.name')}
                selected={vehicleCategory === "eco"}
                onSelect={() => setVehicleCategory("eco")}
              />
              <RadioButton
                label={t('vehicle.business.name')}
                selected={vehicleCategory === "business"}
                onSelect={() => setVehicleCategory("business")}
              />
              <RadioButton
                label={t('vehicle.van.name')}
                selected={vehicleCategory === "van"}
                onSelect={() => setVehicleCategory("van")}
              />
            </View>
          </View>

          <View style={styles.priceSection}>
            <Text style={styles.priceSectionTitle}>{t('estimate.estimatedPrice')}</Text>
            <PriceDisplay price={estimatedPrice} />
            <Text style={styles.priceNote}>
              {t('estimate.priceNote')}
            </Text>
          </View>

          <View style={styles.actionButtons}>
            <StyledButton
              title={t('estimate.bookByPhone')}
              onPress={handlePhoneCall}
              primary
              icon="phone"
            />
            <StyledButton
              title={t('estimate.requestByEmail')}
              onPress={handleEmail}
              style={{ marginTop: 12 }}
              icon="mail"
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
  formContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  formSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: theme.fonts.heading.regular,
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 12,
  },
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
  },
  priceSection: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 20,
    borderRadius: 8,
    marginBottom: 24,
    alignItems: "center",
  },
  priceSectionTitle: {
    fontFamily: theme.fonts.heading.regular,
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 12,
  },
  priceNote: {
    fontFamily: theme.fonts.body.regular,
    fontSize: 12,
    color: theme.colors.textLight,
    marginTop: 8,
    fontStyle: "italic",
  },
  actionButtons: {
    marginTop: 8,
  },
});
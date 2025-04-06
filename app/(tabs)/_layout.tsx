import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Home, Calculator, Car, Phone } from "lucide-react-native";
import { theme } from "@/constants/theme";
import { useLanguageStore } from "@/stores/languageStore";

export default function TabLayout() {
  const { t } = useLanguageStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: false, // Remove the header completely
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ color }) => <Home size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="estimate"
        options={{
          title: t('tabs.estimate'),
          tabBarIcon: ({ color }) => <Calculator size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: t('tabs.services'),
          tabBarIcon: ({ color }) => <Car size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: t('tabs.contact'),
          tabBarIcon: ({ color }) => <Phone size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 35,
    backgroundColor: theme.colors.white,
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },
  tabBarLabel: {
    fontFamily: theme.fonts.body.medium,
    fontSize: 11,
    marginBottom: 2,
  }
});
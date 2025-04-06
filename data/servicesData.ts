import { Platform } from "react-native";

export interface RoutePrice {
  eco: number | string;
  business: number;
  van: number;
}

export interface PredefinedRoute {
  id: string;
  label: string;
  prices: RoutePrice;
}

export interface HourlyRate {
  eco: number;
  business: number;
  van: number;
}

export interface VehicleCategory {
  id: "eco" | "business" | "van";
  name: string;
  description: string;
  image: any;
}

export interface ContactDetails {
  phone: string;
  phoneFormatted: string;
  email: string;
  website?: string;
}

export interface BrandValues {
  title: string;
  tagline: string;
  points: string[];
}

export const predefinedRoutes: PredefinedRoute[] = [
  { id: 'p-p', label: 'route.p-p', prices: { eco: '35-40', business: 60, van: 65 } },
  { id: 'prg-orly', label: 'route.prg-orly', prices: { eco: 55, business: 75, van: 80 } },
  { id: 'prd-orly', label: 'route.prd-orly', prices: { eco: 60, business: 80, van: 90 } },
  { id: 'prg-cdg', label: 'route.prg-cdg', prices: { eco: 70, business: 90, van: 100 } },
  { id: 'prd-cdg', label: 'route.prd-cdg', prices: { eco: 65, business: 80, van: 100 } },
  { id: 'cdg-orly', label: 'route.cdg-orly', prices: { eco: 85, business: 100, van: 120 } },
  { id: 'p-beauvais', label: 'route.p-beauvais', prices: { eco: 150, business: 180, van: 200 } },
  { id: 'p-disney', label: 'route.p-disney', prices: { eco: 85, business: 100, van: 135 } },
];

export const hourlyRates: HourlyRate = {
  eco: 50,
  business: 70,
  van: 90,
};

export const vehicleCategories: VehicleCategory[] = [
  { 
    id: 'eco', 
    name: 'vehicle.eco.name', 
    description: 'vehicle.eco.description', 
    image: { uri: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800' } 
  },
  { 
    id: 'business', 
    name: 'vehicle.business.name', 
    description: 'vehicle.business.description', 
    image: require('@/assets/images/business-assai.jpg')
  },
  { 
    id: 'van', 
    name: 'vehicle.van.name', 
    description: 'vehicle.van.description', 
    image: require('@/assets/images/ak-drivers.jpeg')
  },
];

export const contactDetails: ContactDetails = {
  phone: '07.56.86.19.76',
  phoneFormatted: '0756861976',
  email: 'asai.elitechauffeur@gmail.com',
  website: 'https://www.asai-elite.com'
};

export const brandValues: BrandValues = {
  title: "brand.title",
  tagline: "brand.tagline",
  points: [
    "brand.point1",
    "brand.point2",
    "brand.point3",
    "brand.point4"
  ]
};
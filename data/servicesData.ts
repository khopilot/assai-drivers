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
  { id: 'p-p', label: 'Paris - Paris', prices: { eco: '35-40', business: 60, van: 65 } },
  { id: 'prg-orly', label: 'Paris Rive Gauche - Orly', prices: { eco: 55, business: 75, van: 80 } },
  { id: 'prd-orly', label: 'Paris Rive Droite - Orly', prices: { eco: 60, business: 80, van: 90 } },
  { id: 'prg-cdg', label: 'Paris Rive Gauche - CDG / Bourget', prices: { eco: 70, business: 90, van: 100 } },
  { id: 'prd-cdg', label: 'Paris Rive Droite - CDG / Bourget', prices: { eco: 65, business: 80, van: 100 } },
  { id: 'cdg-orly', label: 'CDG / Bourget - Orly', prices: { eco: 85, business: 100, van: 120 } },
  { id: 'p-beauvais', label: 'Paris - Beauvais', prices: { eco: 150, business: 180, van: 200 } },
  { id: 'p-disney', label: 'Paris - Disney', prices: { eco: 85, business: 100, van: 135 } },
];

export const hourlyRates: HourlyRate = {
  eco: 50,
  business: 70,
  van: 90,
};

export const vehicleCategories: VehicleCategory[] = [
  { 
    id: 'eco', 
    name: 'ECO', 
    description: 'Confort et efficacité au meilleur prix. Idéal pour les déplacements professionnels et personnels.', 
    image: { uri: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800' } 
  },
  { 
    id: 'business', 
    name: 'BUSINESS', 
    description: 'Élégance et prestations haut de gamme. Une expérience premium pour vos déplacements importants.', 
    image: require('@/assets/images/business-assai.jpg')
  },
  { 
    id: 'van', 
    name: 'VAN', 
    description: 'Espace et confort pour les groupes. Parfait pour les familles ou les équipes professionnelles.', 
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
  title: "ASAÏ ELITE CHAUFFEURS",
  tagline: "Votre partenaire de confiance pour des déplacements d'exception.",
  points: [
    "Fiabilité et Ponctualité",
    "Chauffeurs Professionnels et Discrets",
    "Véhicules Haut de Gamme",
    "Service Personnalisé"
  ]
};
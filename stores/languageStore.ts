import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Language = 'fr' | 'en';

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Define the translation dictionary type with index signature
type TranslationDictionary = {
  [key: string]: string;
};

// Translation dictionary
const translations: Record<Language, TranslationDictionary> = {
  fr: {
    // Home
    'home.title': 'ASAÏ ELITE CHAUFFEURS',
    'home.tagline': 'Votre partenaire de confiance pour des déplacements d\'exception.',
    'home.engagement': 'Notre Engagement',
    'home.estimate': 'Estimer un Trajet',
    'home.discover': 'Découvrir nos Services',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Découvrez notre gamme de véhicules et services adaptés à vos besoins',
    'services.additional': 'Services Complémentaires',
    'services.service1': 'Accueil personnalisé avec pancarte nominative',
    'services.service2': 'Suivi des vols et ajustement en cas de retard',
    'services.service3': 'Bouteilles d\'eau et magazines à disposition',
    'services.service4': 'Sièges enfants sur demande',
    'services.service5': 'Service multilingue (français, anglais)',
    
    // Estimate
    'estimate.title': 'Estimer votre trajet',
    'estimate.subtitle': 'Obtenez une estimation de prix pour votre déplacement',
    'estimate.serviceType': 'Type de service',
    'estimate.predefinedRoute': 'Trajet prédéfini',
    'estimate.hourlyService': 'Mise à disposition',
    'estimate.selectRoute': 'Sélectionnez votre trajet',
    'estimate.hours': 'Nombre d\'heures',
    'estimate.vehicleCategory': 'Catégorie de véhicule',
    'estimate.estimatedPrice': 'Prix estimé',
    'estimate.priceNote': '* Prix indicatif, sujet à confirmation',
    'estimate.bookByPhone': 'Réserver par téléphone',
    'estimate.requestByEmail': 'Demander par email',
    'estimate.emailSubject': 'Demande de réservation ASAÏ ELITE CHAUFFEURS',
    'estimate.emailBodyRoute': 'Bonjour ASAÏ,\n\nJe suis intéressé(e) par un trajet {route} en catégorie {category}.\nPrix estimé : {price}\n\nMerci de me contacter pour confirmer la réservation.',
    'estimate.emailBodyHourly': 'Bonjour ASAÏ,\n\nJe suis intéressé(e) par une mise à disposition de {hours} heures en catégorie {category}.\nPrix estimé : {price}\n\nMerci de me contacter pour confirmer la réservation.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Notre équipe est à votre disposition pour répondre à toutes vos demandes',
    'contact.location': 'Paris et Île-de-France',
    'contact.serviceArea': 'Zone de service',
    'contact.mapCaption': 'Nous opérons principalement à Paris et en Île-de-France',
    'contact.hours': 'Horaires',
    'contact.hoursText': 'Nos services sont disponibles 24h/24 et 7j/7',
    'contact.booking': 'Réservation',
    'contact.bookingText': 'Pour garantir la disponibilité, nous vous recommandons de réserver votre chauffeur au moins 24h à l\'avance.',
  },
  en: {
    // Home
    'home.title': 'ASAÏ ELITE CHAUFFEURS',
    'home.tagline': 'Your trusted partner for exceptional transportation.',
    'home.engagement': 'Our Commitment',
    'home.estimate': 'Estimate a Trip',
    'home.discover': 'Discover our Services',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Discover our range of vehicles and services tailored to your needs',
    'services.additional': 'Additional Services',
    'services.service1': 'Personalized welcome with name sign',
    'services.service2': 'Flight tracking and adjustment in case of delay',
    'services.service3': 'Complimentary water bottles and magazines',
    'services.service4': 'Child seats available upon request',
    'services.service5': 'Multilingual service (French, English)',
    
    // Estimate
    'estimate.title': 'Estimate your trip',
    'estimate.subtitle': 'Get a price estimate for your journey',
    'estimate.serviceType': 'Service type',
    'estimate.predefinedRoute': 'Predefined route',
    'estimate.hourlyService': 'Hourly service',
    'estimate.selectRoute': 'Select your route',
    'estimate.hours': 'Number of hours',
    'estimate.vehicleCategory': 'Vehicle category',
    'estimate.estimatedPrice': 'Estimated price',
    'estimate.priceNote': '* Indicative price, subject to confirmation',
    'estimate.bookByPhone': 'Book by phone',
    'estimate.requestByEmail': 'Request by email',
    'estimate.emailSubject': 'Booking Request ASAÏ ELITE CHAUFFEURS',
    'estimate.emailBodyRoute': 'Hello ASAÏ,\n\nI am interested in a {route} trip in {category} category.\nEstimated price: {price}\n\nPlease contact me to confirm the booking.',
    'estimate.emailBodyHourly': 'Hello ASAÏ,\n\nI am interested in a {hours}-hour service in {category} category.\nEstimated price: {price}\n\nPlease contact me to confirm the booking.',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.subtitle': 'Our team is at your disposal to answer all your requests',
    'contact.location': 'Paris and Île-de-France',
    'contact.serviceArea': 'Service Area',
    'contact.mapCaption': 'We operate mainly in Paris and the Île-de-France region',
    'contact.hours': 'Hours',
    'contact.hoursText': 'Our services are available 24/7',
    'contact.booking': 'Booking',
    'contact.bookingText': 'To guarantee availability, we recommend booking your driver at least 24 hours in advance.',
  }
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'fr',
      toggleLanguage: () => set(state => ({ 
        language: state.language === 'fr' ? 'en' : 'fr' 
      })),
      setLanguage: (language) => set({ language }),
      t: (key: string) => {
        const { language } = get();
        return translations[language][key] || key;
      }
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
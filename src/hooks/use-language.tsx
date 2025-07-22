
import React, { createContext, useContext, useState, useEffect } from "react";

// Supported languages
export type Language = "en" | "ur" | "pa" | "sd" | "ps" | "bl";

// Translation dictionary type
type TranslationDictionary = {
  [key in Language]: {
    [key: string]: string;
  };
};

// Initial translations (we'll add more as we build features)
const translations: TranslationDictionary = {
  en: {
    // Common
    "app.name": "TUFL - The Ultimate Family League",
    "app.tagline": "Supporting Early Childhood Development in Pakistan",
    
    // Navigation
    "nav.home": "Home",
    "nav.milestones": "Milestones",
    "nav.health": "Health AI",
    "nav.experts": "Ask Experts",
    "nav.resources": "Resources",
    "nav.account": "My Account",
    
    // Resources page
    "resources.title": "Parenting Resources & Workshops",
    "resources.description": "Access workshops, guides, and tools to support your child's development.",
    "resources.all": "All",
    "resources.workshops": "Workshops",
    "resources.downloads": "Downloads",
    "resources.registerButton": "Register Now",
    "resources.downloadButton": "Download",
    
    // Language selector
    "language.english": "English",
    "language.urdu": "Urdu",
    "language.punjabi": "Punjabi",
    "language.sindhi": "Sindhi",
    "language.pashto": "Pashto",
    "language.balochi": "Balochi",
    "language.select": "Select Language"
  },
  ur: {
    // Common
    "app.name": "ٹی یو ایف ایل - دی الٹیمیٹ فیملی لیگ",
    "app.tagline": "پاکستان میں ابتدائی بچپن کی نشوونما کی حمایت",
    
    // Navigation
    "nav.home": "ہوم",
    "nav.milestones": "نشوونما کے مراحل",
    "nav.health": "صحت اے آئی",
    "nav.experts": "ماہرین سے پوچھیں",
    "nav.resources": "وسائل",
    "nav.account": "میرا اکاؤنٹ",
    
    // Resources page
    "resources.title": "والدین کے لیے وسائل اور ورکشاپس",
    "resources.description": "اپنے بچے کی نشوونما کی حمایت کے لیے ورکشاپس، گائیڈز، اور ٹولز تک رسائی حاصل کریں۔",
    "resources.all": "تمام",
    "resources.workshops": "ورکشاپس",
    "resources.downloads": "ڈاؤنلوڈز",
    "resources.registerButton": "ابھی رجسٹر کریں",
    "resources.downloadButton": "ڈاؤنلوڈ کریں",
    
    // Language selector
    "language.english": "انگریزی",
    "language.urdu": "اردو",
    "language.punjabi": "پنجابی",
    "language.sindhi": "سندھی",
    "language.pashto": "پشتو",
    "language.balochi": "بلوچی",
    "language.select": "زبان منتخب کریں"
  },
  // Placeholder translations for other languages - would be filled by professional translators
  pa: {
    // Common
    "app.name": "TUFL - The Ultimate Family League",
    "app.tagline": "Supporting Early Childhood Development in Pakistan",
    
    // Navigation & other strings would be similar to above, with Punjabi translations
    "resources.title": "Parenting Resources & Workshops",
    "resources.description": "Access workshops, guides, and tools to support your child's development.",
    "resources.all": "All",
    "resources.workshops": "Workshops",
    "resources.downloads": "Downloads",
    "resources.registerButton": "Register Now",
    "resources.downloadButton": "Download",
    
    // Language selector
    "language.english": "English",
    "language.urdu": "Urdu",
    "language.punjabi": "Punjabi",
    "language.sindhi": "Sindhi",
    "language.pashto": "Pashto",
    "language.balochi": "Balochi",
    "language.select": "Select Language"
  },
  sd: {
    // Common
    "app.name": "TUFL - The Ultimate Family League",
    "app.tagline": "Supporting Early Childhood Development in Pakistan",
    
    // Navigation & other strings would be similar to above, with Sindhi translations
    "resources.title": "Parenting Resources & Workshops",
    "resources.description": "Access workshops, guides, and tools to support your child's development.",
    "resources.all": "All",
    "resources.workshops": "Workshops",
    "resources.downloads": "Downloads",
    "resources.registerButton": "Register Now",
    "resources.downloadButton": "Download",
    
    // Language selector
    "language.english": "English",
    "language.urdu": "Urdu",
    "language.punjabi": "Punjabi",
    "language.sindhi": "Sindhi",
    "language.pashto": "Pashto",
    "language.balochi": "Balochi",
    "language.select": "Select Language"
  },
  ps: {
    // Common
    "app.name": "TUFL - The Ultimate Family League",
    "app.tagline": "Supporting Early Childhood Development in Pakistan",
    
    // Navigation & other strings would be similar to above, with Pashto translations
    "resources.title": "Parenting Resources & Workshops",
    "resources.description": "Access workshops, guides, and tools to support your child's development.",
    "resources.all": "All",
    "resources.workshops": "Workshops",
    "resources.downloads": "Downloads",
    "resources.registerButton": "Register Now",
    "resources.downloadButton": "Download",
    
    // Language selector
    "language.english": "English",
    "language.urdu": "Urdu",
    "language.punjabi": "Punjabi",
    "language.sindhi": "Sindhi",
    "language.pashto": "Pashto",
    "language.balochi": "Balochi",
    "language.select": "Select Language"
  },
  bl: {
    // Common
    "app.name": "TUFL - The Ultimate Family League",
    "app.tagline": "Supporting Early Childhood Development in Pakistan",
    
    // Navigation & other strings would be similar to above, with Balochi translations
    "resources.title": "Parenting Resources & Workshops",
    "resources.description": "Access workshops, guides, and tools to support your child's development.",
    "resources.all": "All",
    "resources.workshops": "Workshops",
    "resources.downloads": "Downloads",
    "resources.registerButton": "Register Now",
    "resources.downloadButton": "Download",
    
    // Language selector
    "language.english": "English",
    "language.urdu": "Urdu",
    "language.punjabi": "Punjabi",
    "language.sindhi": "Sindhi",
    "language.pashto": "Pashto",
    "language.balochi": "Balochi",
    "language.select": "Select Language"
  }
};

// Language context
type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("language", currentLanguage);
    // Set direction attribute for RTL languages (Urdu, etc.)
    document.documentElement.dir = currentLanguage === "ur" ? "rtl" : "ltr";
    
    // Add language class to help with font styling
    document.documentElement.className = currentLanguage;
  }, [currentLanguage]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[currentLanguage][key]) {
      // Fallback to English if translation is missing
      return translations.en[key] || key;
    }
    return translations[currentLanguage][key];
  };

  // Set language function
  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for accessing the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

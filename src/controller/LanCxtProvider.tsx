import React, { createContext, useEffect, useState, ReactNode } from "react";

interface LanguageContextProps {
  lan: string;
  setLan: (lan: string) => void;
}
  
export const language = createContext<LanguageContextProps | undefined>(undefined);

interface LanProviderProps {
  children: ReactNode;
}

export const LanProvider: React.FC<LanProviderProps> = ({ children }) => {
  const initialLan = localStorage.getItem('lan') || 'en';
  const [lan, setLan] = useState<string>(initialLan);

  useEffect(() => {
    localStorage.setItem('lan', lan);
  }, [lan]);

  return (
    <language.Provider value={{ lan, setLan }}>
      {children}
    </language.Provider>
  );
};
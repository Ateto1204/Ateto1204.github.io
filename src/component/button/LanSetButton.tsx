import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { glassBgStyle } from "../../data/glassStyle";

interface LanguageContextProps {
  lan: string;
  setLan: (lan: string) => void;
}

export const language = createContext<LanguageContextProps | undefined>(undefined);

interface LanProviderProps {
  children: ReactNode;
}

export const LanProvider: React.FC<LanProviderProps> = ({ children }) => {
  const initialLan = localStorage.getItem('lan') || 'zh';
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

export const LanSetButton = () => {
    const context = useContext(language);

    if (!context) {
        throw new Error("LanSetButton must be used within a LanProvider");
    }

    const { lan, setLan } = context;

    return (
        <div className={`fixed left-3 top-3 text-3xl p-2 font-semibold
                        hover:opacity-50 transition-opacity ${glassBgStyle}`}>
            <button onClick={() => setLan(lan === 'zh' ? 'en' : 'zh')}>
                { lan === 'zh' ? 'en' : 'zh' }
            </button>
        </div>
    );
}
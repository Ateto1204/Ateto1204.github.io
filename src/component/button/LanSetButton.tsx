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

export const LanSetButton = () => {
    const context = useContext(language);

    if (!context) {
        throw new Error("LanSetButton must be used within a LanProvider");
    }

    const { lan, setLan } = context;

    return (
        <div className='fixed left-7 top-7'>
            <button 
                className={`text-xl p-3 font-semibold
                            hover:opacity-50 transition-opacity 
                            ${glassBgStyle}`}
                onClick={() => setLan(lan === 'zh' ? 'en' : 'zh')}
            >
                { lan === 'zh' ? 'En' : '中' }
            </button>
        </div>
    );
}
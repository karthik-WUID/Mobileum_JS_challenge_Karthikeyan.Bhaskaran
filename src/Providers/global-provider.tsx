import {
    createContext,
    ReactNode,
    useState,
    SetStateAction
} from "react";

export type GlobalContextType = {
    theme: string;
    setTheme: (value: string) => void;
    smartPhoneData: any[];
    setSmartPhoneData: (value: SetStateAction<any[]>) => void;
};

const defaultContextValue: GlobalContextType = {
    theme: localStorage.getItem("theme") || "light",
    setTheme: () => {},
    smartPhoneData: [],
    setSmartPhoneData: () => {}
};

type GlobalProviderPropType = {
  children: ReactNode;
};

const GlobalContext = createContext<GlobalContextType>(defaultContextValue);

const GlobalProvider= ({ children }: GlobalProviderPropType) => {
  const [theme, updateTheme] = useState(defaultContextValue.theme);
  const [smartPhoneData, setSmartPhoneData] = useState(defaultContextValue.smartPhoneData);

  const setTheme = (theme: string) => {
    localStorage.setItem("theme", theme)
    updateTheme(theme);
  }

  return (
    <GlobalContext.Provider value={{ theme, setTheme, smartPhoneData, setSmartPhoneData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };   
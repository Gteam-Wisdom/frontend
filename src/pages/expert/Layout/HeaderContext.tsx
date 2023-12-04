import React, { createContext, useContext, ReactNode, FC } from "react";

const HeaderContext = createContext<
  | {
      headerText: string;
      setHeaderText: (text: string) => void;
    }
  | undefined
>(undefined);

const HeaderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [headerText, setHeaderText] = React.useState<string>("");

  return (
    <HeaderContext.Provider value={{ headerText, setHeaderText }}>
      {children}
    </HeaderContext.Provider>
  );
};

const useHeaderText = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderText must be used within a HeaderProvider");
  }
  return context;
};

export { HeaderProvider, useHeaderText };

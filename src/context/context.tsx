import React, { createContext, useContext, useState } from "react";

const PasswordValue = createContext("");
const PasswordUpdate = createContext<any>(() => {});

export const useContextValue = () => {
  const context = useContext(PasswordValue);
  return context;
};
export const useContextUpdate = () => {
  const update = useContext(PasswordUpdate);
  return update;
};

interface Props {
  children: React.ReactNode;
}
export const PasswordContext = ({ children }: Props) => {
  const [password, setPassword] = useState("");
  return (
    <PasswordValue.Provider value={password}>
      <PasswordUpdate.Provider value={setPassword}>
        {children}
      </PasswordUpdate.Provider>
    </PasswordValue.Provider>
  );
};

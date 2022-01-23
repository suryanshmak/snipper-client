import { createContext, ReactElement, useState } from "react";

type UserContext = {
  isSigned: boolean;
  setIsSigned: (isSigned: boolean) => void;
};

export const UserContext = createContext<UserContext>({
  isSigned: false,
  setIsSigned: (isSigned: boolean) => {},
});

type UserProviderProps = {
  children: ReactElement;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const cookie = document.cookie;
  const cookieValue = Boolean(cookie.slice(cookie.indexOf("=") + 1));
  const [isSigned, setIsSigned] = useState<boolean>(cookieValue);
  return (
    <UserContext.Provider value={{ isSigned, setIsSigned }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

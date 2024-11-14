import { createContext, useContext, useState, ReactNode } from "react";

import { Action, User } from "src/services/Users/dtos/Users.dto";

interface AppState {
  isLoading: boolean;
  users: User[];
  isOpen: boolean;
  currentUser: User | null;
  action: Action;
}

interface AppContextProps extends AppState {
  setIsLoading: (isLoading: boolean) => void;
  setUsers: (users: User[]) => void;
  setIsOpen: (isLoading: boolean) => void;
  setCurrentUser: (users: User) => void;
  setAction: (action: Action) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const initialState: AppState = {
  isLoading: false,
  users: [],
  isOpen: false,
  currentUser: null,
  action: "APPROVED",
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [isOpen, setIsOpen] = useState(initialState.isOpen);
  const [users, setUsers] = useState(initialState.users);
  const [currentUser, setCurrentUser] = useState(initialState.currentUser);
  const [action, setAction] = useState(initialState.action);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        users,
        setIsLoading,
        setUsers,
        isOpen,
        setIsOpen,
        currentUser,
        setCurrentUser,
        action,
        setAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

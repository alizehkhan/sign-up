import { Dispatch, SetStateAction, createContext } from "react";

type User = {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
};

export const AuthContext = createContext<User>({
  user: null,
  setUser: () => {},
});

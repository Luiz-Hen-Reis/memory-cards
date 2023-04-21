import { registerRequest, signInRequest } from "@/libs/auth";
import { setCookie, destroyCookie } from "nookies";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";

type User = {
  name: string;
  email: String;
};

type ProviderProps = {
  children: ReactNode;
};

export type SignInData = {
  email: string;
  password: string;
}

export type RegisterData = {
  email: string;
  name: string;
  password: string;
}


type AuthContextType = {
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
  signUp: (data: RegisterData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  async function signIn({ email, password }: SignInData) {
      const { user, token } = await signInRequest({ email, password });
      console.log(user);
      
  }

  async function signUp({ email, name, password }: RegisterData) {
    const { user, token } = await registerRequest({
      email,
      name,
      password,
    });

    setCookie(undefined, "nextmemorycard.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser(user);

    router.push("/");
  }

  function signOut() {
    destroyCookie(undefined, "nextmemorycard.token", { path: "/" });
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

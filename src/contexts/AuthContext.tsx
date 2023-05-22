import {
  recoverUserInformation,
  registerRequest,
  signInRequest,
} from "@/libs/auth";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import { User, UserData } from "@/types/UserInfo";

type ProviderProps = {
  children: ReactNode;
};

type FormValues = {
  email: string;
  name: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (data: FormValues) => Promise<void>;
  signOut: () => void;
  signUp: (data: FormValues) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { "nextmemorycard.token": token } = parseCookies();

    if (token) {
      recoverUserInformation(token).then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn(data: FormValues) {
    const { user, token } = await signInRequest(data);
    setCookie(undefined, "nextmemorycard.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
      path: "/",
    });

    setUser(user);

    router.push("/");
  }

  async function signUp({ email, name, password }: FormValues) {
    const { user, token } = await registerRequest({
      email,
      name,
      password,
    });

    setCookie(undefined, "nextmemorycard.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
      path: "/",
    });

    setUser(user);

    router.push("/");
  }

  function signOut() {
    destroyCookie(undefined, "nextmemorycard.token", { path: "/" });
    setUser(null);
    router.push("/auth/login");
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

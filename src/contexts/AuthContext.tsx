import {
  recoverUserInformation,
  registerRequest,
  signInRequest,
} from "@/libs/auth";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import { UserData } from "@/types/UserInfo";

type ProviderProps = {
  children: ReactNode;
};

type FormValues = {
  email: string;
  name: string;
  password: string;
};

type AuthContextType = {
  userData: UserData | null;
  signIn: (data: FormValues) => Promise<void>;
  signOut: () => void;
  signUp: (data: FormValues) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { "nextmemorycard.token": token } = parseCookies();

    if (token) {
      recoverUserInformation(token).then((response) => {
        setUserData(response);
      });
    }
  }, []);

  async function signIn(data: FormValues) {
    const { user, token } = await signInRequest(data);
    setCookie(undefined, "nextmemorycard.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
      path: "/",
    });

    setUserData(user);

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

    setUserData(user);

    router.push("/");
  }

  function signOut() {
    destroyCookie(undefined, "nextmemorycard.token", { path: "/" });
    setUserData(null);
    router.push("/auth/login");
  }

  return (
    <AuthContext.Provider value={{ userData, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

import { ReactNode, useState } from "react";
import { createContext } from "react";

type User = {
    name: string;
    email: String;
}

type ProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({});

export function AuthProvider({ children }: ProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}
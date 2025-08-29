import { createContext, useContext, useState, useEffect , ReactNode } from "react";
import axios from "axios";

interface User{
    _id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    accessToken: string | null;
    register: (name: string, email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    refreshAccessToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children : ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const api = axios.create({
        baseURL: "http://localhost:5000/api",
        withCredentials: true,
    });

    const register = async (name: string, email: string, password: string) => {
        await api.post("/auth/register", { name, email, password });
    }

    const login = async (email: string, password: string) => {
        const res = await api.post("/auth/login", { email, password });
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
    };

    const logout = async () => {
        await api.post("/auth/logout");
        setUser(null);
        setAccessToken(null);
    };

    const refreshAccessToken = async () =>{
        try{
            const res = await api.post("/auth/refresh");
            setAccessToken(res.data.accessToken);
        } catch (error){
            setUser(null);
            setAccessToken(null);
        }
    };

    useEffect(()=> {
        refreshAccessToken();
    },[]);

    return (
        <AuthContext.Provider value={{ user, accessToken, register, login, logout, refreshAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("Access outside scope");
    }
    return context;
}
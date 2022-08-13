import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { createContext, useState } from "react";
import { IContextType, IUserProvider, IUserSignin } from "../@types";

import api from "../SERVICES/api";

export const userContext = createContext({} as IContextType);

export function UserProvider({ children }: IUserProvider) {
    const [email, setEmail] = useState<string>();
    const [user, setUser] = useState<IUserSignin>();
    const [password, setPassword] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        if (email == "") {
            return toast.error("Preencha o campo com seu e-mail");
        }
        if (password == "") {
            return toast.error("Preencha o campo com a sua senha");
        }

        const data = {
            email,
            password,
        };
        await api
            .post("User/signin", data)
            .then((response) => {
                setUser(response.data);
                localStorage.setItem("TOKEN", response.data.accessToken);
                localStorage.setItem(
                    "REFRESHTOKEN",
                    response.data.refreshToken
                );
                setLoading(false);
                navigate("/order");
            })
            .catch((error: AxiosError) => {
                if (error.response?.status == 404) {
                    return toast.error("Usuário ou senha não encontrados");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }
    return (
        <userContext.Provider
            value={{
                handleSignIn,
                email,
                password,
                setEmail,
                setPassword,
                user,
                loading,
            }}
        >
            {children}
        </userContext.Provider>
    );
}

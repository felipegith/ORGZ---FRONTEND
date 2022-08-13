import React, { ReactNode, Dispatch, SetStateAction } from "react"

export interface IHeader{
    title: string,
    description: string
}

export interface IButton {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export interface IUserProvider{
    children: ReactNode
}

export interface IUserSignin{
    id: string;
    authenticated: boolean;
    created: string;
    expiration: string;
    accessToken: string;
    refreshToken: string;
    email: string;
    name: string;
}

export interface IContextType{
    email: string | undefined;
    password: string | undefined;
    user: IUserSignin | undefined;
    loading: boolean;
    setEmail: Dispatch<SetStateAction<string | undefined>>;
    setPassword: Dispatch<SetStateAction<string | undefined>>;
    handleSignIn: (e:React.FormEvent<HTMLFormElement>) => void;
}

export interface IFood{
    email: string;
    isActive: boolean;
    name: string;
    type: number;
    foods: Array<{
        drink: string;
        eat: string;
        name: string;
        observation: string;
        value: number;
        createAt: string;
        payment: string
    }>
}

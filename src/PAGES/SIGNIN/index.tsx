import { useContext } from "react";
import { userContext } from "../../CONTEXT/UserContext";
import { Link } from "react-router-dom";

import LOGO from "../../ASSETS/sign.png";
import Button from "../../COMPONENTS/BUTTON";
import Header from "../../COMPONENTS/HEADER";

import "./styles.css";

export default function Signin() {
    const { email, password, setPassword, setEmail, handleSignIn } =
        useContext(userContext);
    return (
        <div id="container_signin">
            <Header
                title="Bem vindo de volta!"
                description="Para começar suas atividades faça seu login"
            />
            <div className="container_signin_logo">
                <img src={LOGO} className="logo_icon_signin" />
            </div>

            <form className="container_signin_form" onSubmit={handleSignIn}>
                <div className="container_signin_form_inputs">
                    <label className="text_signin_form_inputs">Email</label>
                    <input
                        type="email"
                        placeholder="joao@mail.com"
                        className="input_signin_form"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="container_signin_form_inputs">
                    <label className="text_signin_form_inputs">Senha</label>
                    <input
                        type="password"
                        placeholder="*****"
                        className="input_signin_form_without_margin"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="container_signin_forgot_password">
                    <p className="text_signin_forgot_password">
                        Esqueceu sua senha?
                    </p>
                </div>
                {/* <Link to="/order"> */}
                <Button text="Entrar" type="submit" />
                {/* </Link> */}
            </form>
            <footer className="container_signin_footer">
                <p className="text_signin_footer">
                    Todos os direitos reservados
                </p>
            </footer>
        </div>
    );
}

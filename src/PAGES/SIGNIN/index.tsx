import { Link } from "react-router-dom";

import LOGO from "../../ASSETS/ilogo.png";
import Button from "../../COMPONENTS/BUTTON";
import Header from "../../COMPONENTS/HEADER";

import "./styles.css";

export default function Signin() {
    return (
        <div id="container_signin">
            <Header
                title="Bem vindo de volta!"
                description="Para começar suas atividades faça seu login"
            />
            <div className="container_signin_logo">
                <img src={LOGO} className="logo_icon_signin" />
            </div>

            <form className="container_signin_form">
                <input
                    type="text"
                    placeholder="Usuário"
                    className="input_signin_form"
                />
                <input
                    type="password"
                    placeholder="******"
                    className="input_signin_form"
                />
                <div className="container_signin_forgot_password">
                    <p className="text_signin_forgot_password">
                        Esqueceu sua senha?
                    </p>
                </div>
                <Link to="/order">
                    <Button text="Entrar" />
                </Link>
            </form>
            <footer className="container_signin_footer">
                <p className="text_signin_footer">
                    Todos os direitos reservados
                </p>
            </footer>
        </div>
    );
}

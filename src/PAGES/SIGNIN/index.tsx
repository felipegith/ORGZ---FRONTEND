import "./styles.css";

import LOGO from "../../ASSETS/logo.png";
import Button from "../../COMPONENTS/BUTTON";
export default function Signin() {
    return (
        <div id="container_signin">
            <header className="container_signin_header">
                <p className="text_signin_header_title">Bem vindo de volta!</p>
                <p className="text_signin_header_content">
                    Para começar suas atividades faça seu login
                </p>
            </header>
            <div className="container_signin_logo">
                <img src={LOGO} />
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
                <Button text="Entrar" />
            </form>
            <footer className="container_signin_footer">
                <p className="text_signin_footer">
                    Todos os direitos reservados
                </p>
            </footer>
        </div>
    );
}

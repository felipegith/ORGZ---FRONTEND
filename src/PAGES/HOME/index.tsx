import "./styles.css";

import APRESENTATION from "../../ASSETS/homeimg.png";
import Button from "../../COMPONENTS/BUTTON";

export default function Home() {
    return (
        <div id="container_home">
            <header className="container_home_header">
                <main className="container_home_header_main">
                    <p className="text_home_header_title">
                        Gerencie seu estabelecimento de maneira simples
                    </p>
                    <p className="text_home_header_description">
                        Anote seus pedidos e controle seu fluxo de trabalho
                    </p>
                </main>
            </header>
            <div className="container_home_image">
                <img src={APRESENTATION} className="home_image" />
                <div className="container_home_button">
                    <Button text="Começar" />
                </div>
            </div>
            <footer className="container_home_footer">
                <p className="text_home_footer">Todos os direitos reservados</p>
            </footer>
        </div>
    );
}

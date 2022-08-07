import { Link } from "react-router-dom";

import Button from "../../COMPONENTS/BUTTON";
import Header from "../../COMPONENTS/HEADER";

import Icon from "../../ASSETS/food.png";

import "./styles.css";

export default function Order() {
    let nome = "Felipe";
    return (
        <div id="container_order">
            <Link to="/detail" className="container_order_circle">
                <p className="text_order_circle_count">3</p>
            </Link>
            <Header
                title={`Ola ${nome}`}
                description="Anote o pedidos dos seus clientes e encaminhe-os para o
                    local de preparo"
            />
            <div className="container_order_description">
                <img src={Icon} className="icon_order_logo" />
            </div>
            <form className="container_order_form">
                <div className="container_order_form_column">
                    <label className="text_order_form_column">Cliente</label>
                    <input
                        type="text"
                        placeholder="Jõao"
                        className="input_order_form"
                    />

                    <label className="text_order_form_column">Bebida</label>
                    <select className="input_order_form">
                        <option></option>
                        <option value="Burguer">Burguer</option>
                        <option value="X-Tudo">XTUDO</option>
                    </select>

                    <label className="text_order_form_column">Lanche</label>
                    <select className="input_order_form">
                        <option></option>
                        <option value="Burguer">Burguer</option>
                        <option value="X-Tudo">XTUDO</option>
                    </select>

                    <label className="text_order_form_column">
                        Observações
                    </label>
                    <input type="text" className="input_order_form_area" />
                    <div className="container_order_form_value">
                        <p className="text_order_form_value">
                            Valor total do pedido
                        </p>
                        <p className="text_order_form_total">R$55,90</p>
                    </div>
                    <div className="container_order_form_button">
                        <Button text="Finalizar" />
                    </div>
                </div>
            </form>
            <footer className="container_order_footer">
                <p className="text_order_footer">
                    Todos os direitos reservados
                </p>
            </footer>
        </div>
    );
}

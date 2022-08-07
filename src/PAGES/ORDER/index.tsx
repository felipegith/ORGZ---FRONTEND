import Button from "../../COMPONENTS/BUTTON";
import "./styles.css";

export default function Order() {
    return (
        <div id="container_order">
            <header className="container_order_header">
                <p>Olá, Felipe.</p>
                <div className="container_order_header_circle">
                    <p>3</p>
                </div>
            </header>
            <div className="container_order_description">
                <p className="text_order_description">
                    Anote o pedidos dos seus clientes e encaminhe-os para o
                    local de preparo
                </p>
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
        </div>
    );
}

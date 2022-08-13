import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Button from "../../COMPONENTS/BUTTON";
import Header from "../../COMPONENTS/HEADER";

import Icon from "../../ASSETS/food.png";

import api from "../../SERVICES/api";

import "./styles.css";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export default function Order() {
    const [eat, setEat] = useState<string>();
    const [name, setName] = useState<string>();
    const [drink, setDrink] = useState<string>();
    const [observation, setObservation] = useState<string>();
    const [value, setValue] = useState<number>(20.99);
    const [payment, setPayment] = useState<string>("Dinheiro");
    const [createAt, setCreateAt] = useState<string>();
    const [delivery, setDelivery] = useState<boolean>();
    const [countEat, setCountEat] = useState(1);
    const [countDrink, setCountDrink] = useState(1);
    

    function incrementEat() {
        return setCountEat((prevState) => prevState + 1);
    }

    function decrementEat() {
        return setCountEat((prevState) => prevState - 1);
    }

    function incrementDrink() {
        return setCountDrink((prevState) => prevState + 1);
    }

    function decrementDrink() {
        return setCountDrink((prevState) => prevState - 1);
    }

    async function handleOrder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = {
            eat,
            name,
            drink,
            observation,
            value,
            payment,
            createAt,
        };
        await api.post("Food?userId=8d6ff179", data).then((response) => {
            toast.success("Pedido cadastrado com sucesso.");
            console.log("FOI");
            console.log(response.data);
        });
    }
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
            <form className="container_order_form" onSubmit={handleOrder}>
                <div className="container_order_form_column">
                    <div className="container_order_form_column_count">
                        <div className="container_order_form_column_count_row">
                            <label className="text_order_form_column">
                                Cliente
                            </label>
                            <input
                                type="text"
                                placeholder="Jõao"
                                className="input_order_form"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        {/* <div className="container_order_form_add">
                            <button className="button_order_count">-</button>
                            <p className="text_button_count">10</p>
                            <button className="button_order_count">+</button>
                        </div> */}
                    </div>

                    <div className="container_order_form_column_count">
                        <div className="container_order_form_column_count_row">
                            <label className="text_order_form_column">
                                Lanche
                            </label>
                            <select
                                className="input_order_form"
                                value={eat}
                                onChange={(e) => setEat(e.target.value)}
                            >
                                <option value=""></option>
                                <option value="HOT-DOG R$15,00">
                                    HOT-DOG R$15,00
                                </option>
                                <option value="BIG-BURGUER R$17,90">
                                    BIG-BURGUER R$17,90
                                </option>
                            </select>
                        </div>
                        <div className="container_order_form_add">
                            <button
                                className="button_order_count"
                                onClick={decrementEat}
                            >
                                -
                            </button>
                            <p className="text_button_count">{countEat}</p>
                            <button
                                className="button_order_count"
                                onClick={incrementEat}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="container_order_form_column_count">
                        <div className="container_order_form_column_count_row">
                            <label className="text_order_form_column">
                                Bebida
                            </label>
                            <select
                                className="input_order_form"
                                value={drink}
                                onChange={(e) => setDrink(e.target.value)}
                            >
                                <option></option>
                                <option value="Coca cola">Coca cola</option>
                                <option value="Pepsi">Pepsi</option>
                            </select>
                        </div>
                        <div className="container_order_form_add">
                            <button
                                className="button_order_count"
                                onClick={decrementDrink}
                                type="button"
                            >
                                -
                            </button>
                            <p className="text_button_count">{countDrink}</p>
                            <button
                                className="button_order_count"
                                onClick={incrementDrink}
                                type="button"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* <label className="text_order_form_column">Bebida</label>
                    <select
                        className="input_order_form"
                        value={drink}
                        onChange={(e) => setDrink(e.target.value)}
                    >
                        <option></option>
                        <option value="Burguer">Burguer</option>
                        <option value="X-Tudo">XTUDO</option>
                    </select> */}

                    {/* <label className="text_order_form_column">Lanche</label>
                    <select
                        className="input_order_form"
                        value={eat}
                        onChange={(e) => console.log(e.target.value)}
                    >
                        <option></option>
                        <option value="Burguer">Burguer</option>
                        <option value="X-Tudo">XTUDO</option>
                    </select> */}

                    {/* <label className="text_order_form_column">
                        Forma de pagamento
                    </label>
                    <select className="input_order_form">
                        <option></option>
                        <option value="Cartão">Cartão</option>
                        <option value="Dinheiro">Dinheiro</option>
                    </select> */}

                    {/* <label className="text_order_form_column">
                        Para viagem?
                    </label>
                    <select className="input_order_form">
                        <option></option>
                        <option value="Burguer">Sim</option>
                        <option value="X-Tudo">Não</option>
                    </select> */}

                    <label className="text_order_form_column">
                        Observações
                    </label>
                    <input
                        type="text"
                        className="input_order_form_area"
                        value={observation}
                        onChange={(e) => setObservation(e.target.value)}
                    />
                    <div className="container_order_form_two_inputs_row">
                        <div className="container_order_row_options">
                            <label className="text_order_form_column">
                                Forma de pagamento
                            </label>
                            <select className="input_order_form_rows">
                                <option></option>
                                <option value="Burguer">
                                    Cartão de crédito
                                </option>
                                <option value="X-Tudo">Cartão de débito</option>
                                <option value="X-Tudo">Dinheiro</option>
                            </select>
                        </div>

                        <div className="container_order_row_options">
                            <label className="text_order_form_column">
                                Para viagem?
                            </label>
                            <select className="input_order_form_rows">
                                <option></option>
                                <option value="Burguer">Sim</option>
                                <option value="X-Tudo">Não</option>
                            </select>
                        </div>
                    </div>
                    <div className="container_order_form_value">
                        <p className="text_order_form_value">
                            Valor total do pedido
                        </p>
                        <p className="text_order_form_total">R$55,90</p>
                    </div>
                    <div className="container_order_form_button">
                        <Button text="Finalizar" type="submit" />
                    </div>
                </div>
            </form>
            {/*  <footer className="container_order_footer">
                <p className="text_order_footer">
                    Todos os direitos reservados
                </p>
            </footer> */}
        </div>
    );
}

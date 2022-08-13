import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IFood } from "../../@types";
import { format } from "date-fns";
import { AxiosError } from "axios";
import { FiArrowLeft } from "react-icons/fi";

import READ from "../../ASSETS/read.png";
import Header from "../../COMPONENTS/HEADER";
import BounceLoader from "react-spinners/BounceLoader";

import "./styles.css";
import api from "../../SERVICES/api";

export default function Detail() {
    const [foods, setFoods] = useState<IFood>();
    const [loading, setLoading] = useState<boolean>(false);

    const TOKEN = localStorage.getItem("TOKEN");

    useEffect(() => {
        (async () => {
            setLoading(true);
            await api
                .get("User/8d6ff179", {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`,
                    },
                })
                .then((response) => {
                    setFoods(response.data);
                    console.log(foods);
                    setLoading(false);
                })
                .catch((error: AxiosError) => {
                    toast.error("Não foi possível localizar seus pedidos");
                })
                .finally(() => {
                    setLoading(false);
                });
        })();
    }, []);

    return (
        <div id="container_detail">
            <Header
                title={`Olá ${foods?.name}`}
                description="Veja todos os pedidos que você realizou."
            />
            <Link to="/order" className="container_detail_goback">
                <FiArrowLeft size={30} color="#FFF" />
            </Link>

            <div className="container_detail_image_read">
                <img src={READ} className="image_detail_read" />
            </div>
            {loading ? (
                <div className="container_detail_loading_center">
                    <BounceLoader color="#04B3C8" size={45} />
                </div>
            ) : (
                <div className="container_detail_box">
                    {foods?.foods.map((item) => {
                        return (
                            <div className="container_detail_box_data">
                                <div className="container_detail_box_data_row">
                                    <p className="text_detail_box_row">
                                        {item.name}
                                    </p>
                                    <p></p>
                                    <p className="text_detail_box_row_money">
                                        R$ {item.value}
                                    </p>
                                </div>
                                <div className="container_detailt_with_row">
                                    <div className="container_detail_box_row_hour">
                                        <p className="text_detail_box_row_detail">
                                            {/* {Intl.DateTimeFormat("pt-BR").format(
                                            new Date(
                                                item.createAt.split("T")[0]
                                            )
                                        )} */}
                                            {format(
                                                new Date(item.createAt),
                                                "dd/MM/yyyy"
                                            )}
                                        </p>
                                        <p className="text_detail_box_row_detail">
                                            {item.createAt.split("T", 10)[1]}
                                        </p>
                                    </div>
                                    <div className="container_detail_box_row_hour">
                                        <p className="text_detail_box_row_detail">
                                            Cartão de crédito
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

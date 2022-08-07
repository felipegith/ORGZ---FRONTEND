import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineUserDelete } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import Header from "../../COMPONENTS/HEADER";
import READ from "../../ASSETS/read.png";
import "./styles.css";

export default function Detail() {
    let nome = "Felipe";
    return (
        <div id="container_detail">
            <Header
                title={`Olá ${nome}`}
                description="Veja todos os pedidos que você realizou."
            />
            <Link to="/order" className="container_detail_goback">
                <FiArrowLeft size={30} color="#FFF" />
            </Link>

            <div className="container_detail_image_read">
                <img src={READ} className="image_detail_read" />
            </div>

            <div className="container_detail_box">
                <div className="container_detail_box_data">
                    <div className="container_detail_box_data_row">
                        <p className="text_detail_box_row">Jõao</p>
                        <p></p>
                        <p className="text_detail_box_row_money">R$,58,90</p>
                    </div>
                    <div className="container_detail_box_data_row">
                        <p className="text_detail_box_row_detail">
                            07/08/22 - 22:30
                        </p>
                        <p className="text_detail_box_row_detail">
                            Cartão de crédito
                        </p>
                    </div>
                </div>
            </div>

            <div className="container_detail_box">
                <div className="container_detail_box_data">
                    <div className="container_detail_box_data_row">
                        <p className="text_detail_box_row">Jõao</p>
                        <p></p>
                        <p className="text_detail_box_row_money">R$,58,90</p>
                    </div>
                    <div className="container_detail_box_data_row">
                        <p className="text_detail_box_row_detail">
                            07/08/22 - 22:30
                        </p>
                        <p className="text_detail_box_row_detail">
                            Cartão de crédito
                        </p>
                    </div>
                </div>
            </div>

            <div className="container_detail_box">
                <div className="container_detail_box_data">
                    <div className="container_detail_box_data_row">
                        <p className="text_detail_box_row">Jõao</p>
                        <p></p>
                        <p className="text_detail_box_row_money">R$,58,90</p>
                    </div>
                    <div className="container_detail_box_data_row">
                        <p className="text_detail_box_row_detail">
                            07/08/22 - 22:30
                        </p>
                        <p className="text_detail_box_row_detail">
                            Cartão de crédito
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

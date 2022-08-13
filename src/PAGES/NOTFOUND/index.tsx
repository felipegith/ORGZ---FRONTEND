import { Link } from "react-router-dom";

import IMGNOTFOUND from "../../ASSETS/nfound.png";
import Button from "../../COMPONENTS/BUTTON";

import "./styles.css";

export default function NotFound() {
    return (
        <div id="container_notfound">
            <img src={IMGNOTFOUND} className="image_notfound" />
            <p className="text_notfound">Ops, esta página não foi encontrada</p>
            <Link to="/order">
                <Button text="Voltar" />
            </Link>
        </div>
    );
}

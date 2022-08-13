import { IButton } from "../../@types";
import { useContext } from "react";
import { userContext } from "../../CONTEXT/UserContext";

import BounceLoader from "react-spinners/BounceLoader";

import "./styles.css";
{
    /* <ClipLoader color="#000" size={150} />; */
}
export default function Button({ text, type }: IButton) {
    const { loading } = useContext(userContext);
    return (
        <button id="button_component">
            {loading ? <BounceLoader color="#FFF" size={45} /> : text}
        </button>
    );
}

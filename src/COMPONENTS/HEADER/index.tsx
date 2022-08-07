import { IHeader } from "../../@types";
import "./styles.css";

export default function Header({ title, description }: IHeader) {
    return (
        <header id="container_header">
            <p className="text_header_title">{title}</p>
            <p className="text_header_content">{description}</p>
        </header>
    );
}

import "./styles.css";

interface IButton {
    text: string;
}
export default function Button({ text }: IButton) {
    return <button id="button_component">{text}</button>;
}

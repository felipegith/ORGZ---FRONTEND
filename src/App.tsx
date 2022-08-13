import "./global.css";
import "react-toastify/dist/ReactToastify.css";

import { UserProvider } from "./CONTEXT/UserContext";
import { ToastContainer } from "react-toastify";

import Router from "./ROUTES";

function App() {
    return (
        <UserProvider>
            <Router />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </UserProvider>
    );
}

export default App;

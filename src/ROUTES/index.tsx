import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../PAGES/HOME";
import Signin from "../PAGES/SIGNIN";
import Order from "../PAGES/ORDER";
import Detail from "../PAGES/DETAIL";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/order" element={<Order />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    );
}

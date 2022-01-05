import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import Habits from "../Habits";
import Today from "../Today";
import History from "../History";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} ></Route>
                    <Route path="/cadastro" element={<SignUp />} ></Route>
                    <Route path="/habitos" element={<Habits />} ></Route>
                    <Route path="/hoje" element={<Today />} ></Route>
                    <Route path="/historico" element={<History />} ></Route>
                </Routes>

            </BrowserRouter>
        </>

    )
}
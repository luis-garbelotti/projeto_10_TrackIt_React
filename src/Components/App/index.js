import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import Habits from "../Habits";
import Today from "../Today";
import History from "../History";
import '../../Styles/reset.css';
import "../../Styles/style.css";
import { useState } from "react";

export default function App() {

    const [enabled, setEnabled] = useState(true);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login enabled={enabled} setEnabled={setEnabled} setUser={setUser} setToken={setToken} />} ></Route>
                    <Route path="/cadastro" element={<SignUp enabled={enabled} setEnabled={setEnabled} />} ></Route>
                    <Route path="/habitos" element={<Habits />} ></Route>
                    <Route path="/hoje" element={<Today user={user} token={token} />} ></Route>
                    <Route path="/historico" element={<History />} ></Route>
                </Routes>

            </BrowserRouter>
        </>

    )
}
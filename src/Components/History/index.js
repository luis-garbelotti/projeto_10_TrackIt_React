import styled from "styled-components"
import Menu from "../Menu"
import Topbar from "../Topbar"


export default function History() {
    return (
        <>
            <Topbar />
            <Warning>
                <h1>
                    Em breve
                </h1>
            </Warning>

            <Menu />
        </>
    )
}

const Warning = styled.div`

    margin: 20px 15px;

    h1 {
        font-size: 20px;
        color: #126BA5;
    }

`
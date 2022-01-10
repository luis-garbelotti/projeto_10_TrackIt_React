import { useContext } from "react";
import styled from "styled-components";
import minilogo from "../../Images/TrackIt.png";
import UserContext from "../Context/UserContext";

export default function Topbar() {

    const { user } = useContext(UserContext);

    return (

        <>
            <Container>

                <img src={minilogo} alt="TrackIt" />
                <UserImage user={user}>
                </UserImage>

            </Container>
        </>

    )
}

const Container = styled.div`

    width: 100%;
    height: 70px;
    padding: 10px 18px;

    background-color: #126BA5;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);

    img {

        width: 97px;

    }

`

const UserImage = styled.div`

    width: 51px;
    height: 51px;

    border-radius: 50%;

    background-color: lightgray;

    background-image: ${props => `url(${props.user.image})`};
    background-size: 50px;
    background-position: center; 

`
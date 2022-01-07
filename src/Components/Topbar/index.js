import styled from "styled-components";
import minilogo from "../../Images/TrackIt.png";

export default function Topbar({ user }) {

    return (

        <>
            <Container>

                <img src={minilogo} alt="TrackIt" />
                <UserImage>
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

    background-image: url('https://i.pinimg.com/236x/8e/45/e5/8e45e5505659ba403203f9ff07942420.jpg');
    background-size: 50px;
    background-position: center;

`
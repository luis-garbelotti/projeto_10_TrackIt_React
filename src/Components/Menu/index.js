import styled from "styled-components";

function Menu() {
    return (
        <>
            <Container>
                <span>Hábitos</span>

                <TodayProgress>Hoje</TodayProgress>

                <span>Histórico</span>


            </Container>
        </>
    )
}

export default Menu;

const Container = styled.div`

    width: 100%;
    height: 70px;

    background-color: #fff;

    position: absolute;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;

    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);

    span {

        color: #52b6ff;

    }

`

const TodayProgress = styled.div`

    width: 91px;
    height: 91px;

    border-radius: 50%;

    background-color: #52b6ff;

    position: relative;
    top: -35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;

`
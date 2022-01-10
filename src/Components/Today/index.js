import Topbar from "../Topbar";
import Menu from "../Menu";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import vector from "../../Images/Vector.png";
import UserContext from "../Context/UserContext";
import dayjs from 'dayjs';


export default function Today() {

    const [done, setDone] = useState(null);
    const [checked, setChecked] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const [todayWeek, setTodayWeek] = useState();
    const [date, setDate] = useState(dayjs().format('DD/MM'));

    return (

        <>
            <Container>
                <Topbar />
                <TodayContent>
                    <Day>{todayWeek}, {date}</Day>
                    <Progress done={done} >{!done ? "Nenhum hábito concluído ainda" : "67% dos hábitos concluídos"}</Progress>

                    <HabitList>
                        <Habit>
                            <div className="text">
                                <Title>Ler 1 capitulo de livro</Title>
                                <p>Sequência atual: 5 dias</p>
                                <p>Seu recorde: 5 dias</p>
                            </div>

                            <Checkbox type="checkbox" checked={checked} onClick={() => !checked ? setChecked(true) : setChecked(false)} >
                                <img src={vector} alt="vector" />
                            </Checkbox>
                        </Habit>

                    </HabitList>
                    <Menu />
                </TodayContent>

            </Container>

        </>
    )
}

const Container = styled.div`

    width: 100%;


`

const TodayContent = styled.div`

    display: flex;
    flex-direction: column;

    padding: 28px 17px 75px 17px;


`

const Day = styled.span`

    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;

    color: #126BA5;
`

const Progress = styled.span`

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    color: ${(props) => !props.done ? "#BABABA" : "#8FC549"};

`

const HabitList = styled.div`

    margin-top: 28px;

`

const Habit = styled.div`

    width: 340px;
    height: 94px;
    padding: 13px 13px 13px 15px;

    border-radius: 5px;

    background-color: #fff;
    color: #666666;

    display: flex;
    justify-content: space-between;
    flex-direction: row;

    p {

    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    }

`

const Checkbox = styled.div`

    width: 69px;
    background-color: ${(props) => !props.checked ? "#ebebeb" : "#8FC549"};

    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

`

const Title = styled.span`

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

`


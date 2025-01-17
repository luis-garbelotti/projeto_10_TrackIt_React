import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import Menu from "../Menu";
import Topbar from "../Topbar";
import Loader from "react-loader-spinner";
import axios from "axios";
import DayButton from "../DayButton";
import trash from "../../Images/trash.png";
import HabitDays from "../HabitDays";

export default function Habits() {

    const [habitName, setHabitName] = useState('');
    const [hidden, setHidden] = useState('hidden');
    const [disabled, setDisabled] = useState(false);
    const { token, weekDays, setWeekDays } = useContext(UserContext);
    const [allHabits, setAllHabits] = useState([]);
    const [noHabbit, setNoHabbit] = useState('');
    const [update, setUpdate] = useState(false);
    const habitDays = [];

    useEffect(() => {

        const habitPromisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )

        habitPromisse.then(response => {

            setAllHabits(response.data)
            if (response.data.length !== 0) {
                setNoHabbit('hidden');
            }

        })

        habitPromisse.catch(error => console.log(error));

    }, [update]);

    if (!allHabits) {
        return <Loader type="ThreeDots" color="#52B6FF" height={10} width={80} />
    }

    function resetDays() {
        setWeekDays([
            {
                id: 0,
                name: "D",
                selected: false
            },
            {
                id: 1,
                name: "S",
                selected: false
            },
            {
                id: 2,
                name: "T",
                selected: false
            },
            {
                id: 3,
                name: "Q",
                selected: false
            },
            {
                id: 4,
                name: "Q",
                selected: false
            },
            {
                id: 5,
                name: "S",
                selected: false
            },
            {
                id: 6,
                name: "S",
                selected: false
            }
        ])
    }

    function cancel() {

        setHabitName('');
        setHidden('hidden');
        resetDays();

    }

    function handleAddHabit(e) {
        e.preventDefault();

        for (let i = 0; i < weekDays.length; i++) {
            if (weekDays[i].selected === true) {
                habitDays.push(weekDays[i].id);
            }
        }

        if (habitDays.length === 0) {

            alert('Selecione os dias da semana para o seu hábito');

        } else if (habitName === '') {

            alert('Digite um nome para o seu hábito.');

        } else {

            setDisabled(true);

            const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
                {
                    name: habitName,
                    days: habitDays
                },
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
            promisse.then(() => {

                setUpdate(!update);
                setHabitName('');
                setDisabled(false);
                setHidden('hidden');
                resetDays();

            });

            promisse.catch((error) => alert(error.response.data));

        }
    }

    function deleteHabit(eachHabit) {

        if (window.confirm(`Deseja mesmo deletar o habito "${eachHabit.name}"?`)) {

            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${eachHabit.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

            promisse.then(() => {

                alert("Habito deletado com sucesso.")
                setUpdate(!update);

            });

            promisse.catch(error => console.log(error));

        }
    }

    return (
        <>
            <Container>
                <Topbar />
                <Content>

                    <Navbar >
                        <h1>Meus Hábitos</h1>
                        <AddHabit onClick={() => hidden === 'hidden' ? setHidden('') : setHidden('hidden')}>+</AddHabit>
                    </Navbar>

                    <HabitsList>

                        <CreateHabit className={`${hidden}`}>

                            <form onSubmit={handleAddHabit}>
                                <input disabled={disabled} type='text' value={habitName} onChange={(e) => setHabitName(e.target.value)} placeholder="nome do hábito"></input>

                                <DaySelect>
                                    {weekDays.map((days) =>
                                        <DayButton days={days} disabled={disabled} type='button' key={days.id}> </DayButton>
                                    )}
                                </DaySelect>

                                <div className="buttons">

                                    <CancelButton disabled={disabled} type='button' onClick={cancel}> Cancelar </CancelButton>
                                    <SaveButton disabled={disabled}>
                                        {!disabled ? "Salvar" : <Loader type="ThreeDots" color="#FFF" height={10} width={38} />}
                                    </SaveButton>

                                </div>
                            </form>

                        </CreateHabit>

                        {allHabits.map((eachHabit) =>
                            <EachHabit key={eachHabit.id}>
                                <span> {eachHabit.name} </span>
                                <img src={trash} alt='delete' onClick={() => deleteHabit(eachHabit)} />

                                <div className="days">
                                    {weekDays.map((days) =>
                                        <HabitDays key={days.id} days={days} daysToDo={eachHabit.days} ></HabitDays>
                                    )}
                                </div>
                            </EachHabit>
                        )}

                    </HabitsList>

                    <span className={`${noHabbit}`} >Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>

                </Content>
                <Menu />
            </Container>
        </>
    )
}

const Container = styled.div`
    padding-bottom: 90px;
`

const Content = styled.div`
    
    padding: 22px 17px;
    height: 100;

    span {

        font-size: 18px;
        color: #666666;

    }
`

const Navbar = styled.div`

    color: #52B6FF;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;

    h1{
        font-size: 23px;
    }

`

const AddHabit = styled.button`

    width: 40px;
    height: 35px;

    border-radius: 4.6px;

    background-color: #52b6ff;

    font-size: 27px;
    color: #fff;

`

const CreateHabit = styled.div`

    width: 100%;
    height: 180px;
    margin-bottom: 29px;
    padding: 18px 18px 15px 18px;

    background-color: #fff;

    border-radius: 5px;

    .buttons{

        margin-top: 32px;

        display: flex;
        justify-content: flex-end;

    }

    input {

        width: 303px;
        height: 45px;
        padding: 11px;

        font-size: 20px;
        font-weight: 400;

        
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        
        ::placeholder {
            color: #dbdbdb;
        }
        
        :disabled {
            background-color: #f2f2f2;
        }
    }

`

const DaySelect = styled.div`

    display: flex;
    
`

const SaveButton = styled.button`

    width: 84px;
    height: 35px;

    background-color: #52B6FF;
    color: #fff;

    border-radius: 5px;

    :disabled {
        opacity: 0.7;
    }

`

const CancelButton = styled.button`

    width: 84px;
    height: 35px;

    background: none;
    color: #52B6FF;


    :disabled {
        opacity: 0.7;
    }

`

const HabitsList = styled.div`

    width: 100%;
    height: auto;

`

const EachHabit = styled.div`

    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 13px 11px 15px 15px;

    background-color: #fff;

    position: relative;

    span {
        font-size: 20px;
    }

    img {
        position: absolute;
        top: 11px;
        right: 10px;
    }

    .days {
        display: flex;
    }

`
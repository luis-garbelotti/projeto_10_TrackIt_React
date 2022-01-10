import styled from "styled-components";
import logo from "../../Images/logo.png";
import Button from "../Button";
import Input from "../Input";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function SignUp({ enabled, setEnabled }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            email: '',
            name: '',
            image: '',
            password: ''
        }
    );

    function handleSignUp(e) {
        e.preventDefault();

        if (!formData.email || !formData.name || !formData.image || !formData.password) {

            alert("Preencha todos os campos corretamente e tente novamente.");

        } else {

            setEnabled(false);

            const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
                ...formData
            })

            promisse.then(response => {

                console.log(response);
                navigate("/");
                setEnabled(true);

            });

            promisse.catch(error => {

                console.log(error);
                alert("Algo de errado aconteceu. Tente novamente.");
                setEnabled(true);

            })
        }
    }

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Container>

                <img src={logo} alt="Trackit" />

                <FormSignup>

                    <form onSubmit={handleSignUp}>
                        <Input
                            type="email"
                            placeholder="email"
                            name="email"
                            onChange={handleInputChange}
                            value={formData.email}
                            disabled={!enabled}
                        />
                        <Input
                            type="password"
                            placeholder="senha"
                            name="password"
                            onChange={handleInputChange}
                            value={formData.password}
                            disabled={!enabled}
                        />
                        <Input
                            type="text"
                            placeholder="nome"
                            name="name"
                            onChange={handleInputChange}
                            value={formData.name}
                            disabled={!enabled}
                        />
                        <Input
                            type="text"
                            placeholder="imagem"
                            name="image"
                            onChange={handleInputChange}
                            value={formData.image}
                            disabled={!enabled}
                        />
                        <Button type="submit" disabled={!enabled} >
                            {enabled ? "Cadastrar" : <Loader type="ThreeDots" color="#FFF" height={18} width={55} />}
                        </Button>
                    </form>

                </FormSignup>

                <StyledLink to="/" >Já tem uma conta? Faça login!</StyledLink>

            </Container>
        </>
    )
}

const Container = styled.div`

    width: 100%;
    height: 667px;
    padding: 68px 36px 0 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;
    
    img {

        width: 180px;
        height: 179px;
        margin-bottom: 32px;

    } 

`

const FormSignup = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    
    height: auto;

`

const StyledLink = styled(Link)`

    margin-top: 25px;

    font-size: 14px;
    font-weight: 400;
    text-align: center;

    color: #52B6FF;

`

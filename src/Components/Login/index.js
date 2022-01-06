
import styled from "styled-components";
import logo from "../../Images/logo.png";
import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <>
            <Container>

                <img src={logo} alt="Trackit" />

                <FormLogin>

                    <form>
                        <Input type="email" placeholder="email" />
                        <Input type="password" placeholder="senha" />
                        <Button type="submit" > Entrar </Button>
                    </form>

                </FormLogin>

                <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>


            </Container>
        </>
    )

}

const Container = styled.div`

    width: 100%;
    height: auto;
    padding: 68px 36px 0 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {

        width: 180px;
        height: 179px;
        margin-bottom: 32px;
    } 

`

const FormLogin = styled.div`

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
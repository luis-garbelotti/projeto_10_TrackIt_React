import styled from "styled-components";
import logo from "../../Images/logo.png";
import Button from "../Button";
import Input from "../Input";
import { Link } from 'react-router-dom';

export default function SignUp() {

    return (
        <>
            <Container>

                <img src={logo} alt="Trackit" />

                <FormSignup>

                    <form>
                        <Input type="email" placeholder="email" name="email" />
                        <Input type="password" placeholder="senha" name="password" />
                        <Input type="text" placeholder="nome" name="name" />
                        <Input type="text" placeholder="imagem" name="image" />
                        <Button > Entrar </Button>
                    </form>

                </FormSignup>

                <StyledLink to="/" >Já tem uma conta? Faça login!</StyledLink>

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

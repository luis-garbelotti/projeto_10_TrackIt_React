
import styled from "styled-components";
import logo from "../../Images/logo.png";

export default function Login() {

    return (
        <>
            <Container>

                <img src={logo} alt="Trackit" />

                <FormLogin>

                    <form>
                        <input type="email" placeholder="email" />
                        <input type="password" placeholder="password" />
                        <button > Entrar </button>
                    </form>
                </FormLogin>

                <span>Não tem uma conta? Cadastre-se!</span>


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

    span {

        margin-top: 25px;

        font-size: 14px;
        font-weight: 400;
        text-align: center;

        color: #52B6FF;
        
    }

`

const FormLogin = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    
    height: auto;

    input {

        width: 100%;
        height: 45px;
        margin-bottom: 6px;
        padding-left: 11px;

        border: 1px solid #D4D4D4;
        border-radius: 5px;
        
        ::placeholder {

            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: left;

            color: #DBDBDB;

        }
    }

    button {

        width: 100%;
        height: 45px;

        background-color: #52B6FF;

        border-radius: 4.65px;

        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;

        color: #fff;

    }

`
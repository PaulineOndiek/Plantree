import styled from "styled-components"
import Nav from "../component/Nav"
const LoginContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;`
const Inputs=styled.div`
display:flex;
flex-direction:column;
gap:1.5em;
`
const Input=styled.input`
width:60%;
border:none;
outline:none;
border-bottom:1px solid green;
`
const Button=styled.button`
width:20%;
padding:1em 2em;
color:white;
border:none;
background:#1A4D2E;`

const Login=()=>{
    return(
        <LoginContainer>
            <Nav/>
            <Container>
                <Inputs>
                <Input placeholder="Username"/>
                <Input placeholder="Email Address"/>
                <Input placeholder="Password"/>
                <Button>Login</Button>
                </Inputs>

            </Container>
        </LoginContainer>
    )
}
export default Login
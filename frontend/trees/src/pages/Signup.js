import styled from "styled-components"
import Nav from "../component/Nav"
const SignContainer=styled.div`
`
const Container=styled.div`
margin:0 auto;
width:80%;`
const Para=styled.p``
const Head=styled.h2``
const Inputs=styled.div`
display:flex;
flex-direction:column;
// align-items:center;
gap:1.5em;
`
const Button=styled.button`
padding:1em 2em; 
border:none;
width:20%;
background:#1A4D2E;
color:white;

`

const Input=styled.input`
outline:none;
border:none;
border-bottom:1px solid #1A4D2E;
width:60%;`

const Signup=()=>{
    return(
        <SignContainer>
            <Nav/>
            <Container>
                <Para>Make Our Planet Greener!!</Para>
                <Head>Create Your Account</Head>
                <Inputs>
                <Input placeholder="Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
               
                <Button>Register</Button>
                <Para>Have Account Already??</Para>
                </Inputs>

            </Container>
        </SignContainer>
    )
}
export default Signup
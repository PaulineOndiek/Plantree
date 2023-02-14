import styled from "styled-components"
import { Link } from "react-router-dom"
const NavContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;`
const NavUl=styled.ul`
display:flex;
list-style:none;
justify-content:space-between;
cursor:pointer;
`
const NavLeft=styled.div`
display:flex;
width:40%;`
const NavRight=styled.div`
display:flex;
gap:4rem;
// width:60%;`
const NavList=styled.li``

const Nav=()=>{
    return(
        <NavContainer>
            <Container>
                <NavUl>
                    <NavLeft>
                    <NavList><Link to="/">Home</Link></NavList>
                    </NavLeft>
                    <NavRight>                    
                    <NavList><Link to="/About">About</Link></NavList>
                    <NavList><Link to="/Signup">Signup</Link></NavList>
                    <NavList><Link to="/Login">Login</Link></NavList>
                    <NavList><Link to="/Donate">Donate</Link></NavList></NavRight>

                </NavUl>

            </Container>
        </NavContainer>
    )
}
export default Nav
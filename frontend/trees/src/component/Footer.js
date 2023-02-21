import styled from "styled-components"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
const FooterContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;`
const Navigation=styled.div``
const Links=styled.div``
const NavList=styled.li``
const Main=styled.div`
display:flex;
// justify-content:space-between;

`
const Location=styled.div``
const Telephone=styled.div``
const Mail=styled.div``
const Icons=styled.div``

const Footer=()=>{
    return(
        <FooterContainer>
            <Container>
                <Navigation>
                    <NavList>Home</NavList>
                    <NavList>About Us</NavList>
                    <NavList>Signup</NavList>
                    <NavList>Login</NavList>
                </Navigation>
                <Links></Links>

                <Main>
            <Location>
                <LocationOnIcon/>

            </Location>
            <Telephone>
            <CallIcon/>
            </Telephone>
            <Mail>
                <MailIcon/>
            </Mail>

            <Icons>
              <FacebookRoundedIcon/>

            </Icons>
                </Main>
            </Container>
        </FooterContainer>
    )
}
export default Footer
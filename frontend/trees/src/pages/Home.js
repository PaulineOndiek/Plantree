import styled from "styled-components"
import Nav from "../component/Nav"
import Footer from "../component/Footer"
import Main from "../component/Main"

const HomeContainer=styled.div``
const Container=styled.div``
const Home=()=>{
    return(
        <HomeContainer>
            <Container>
                <Nav/>
                <main/>
                <Footer/>
                
            </Container>
        </HomeContainer>

    )
}
export default Home
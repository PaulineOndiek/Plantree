import styled from "styled-components"
import Nav from "../component/Nav"
import Footer from "../component/Footer"
import Main from "../component/Main"
import Category from "../component/Category"
const HomeContainer=styled.div``
const Container=styled.div``
const Home=()=>{
    return(
        <HomeContainer>
            <Container>
                <Nav/>
                <Main/>
                <Category/>
                <Footer/>
                
            </Container>
        </HomeContainer>

    )
}
export default Home
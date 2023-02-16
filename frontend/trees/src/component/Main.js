import styled from "styled-components"

const MainContainer=styled.div`
background-image: linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url("https://images.pexels.com/photos/47334/meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
// width:200px;
height:500px;
background-position:center;
background-repeat:no repeat;
object-fit:cover;
`
const Container=styled.div`
margin:0 auto;
width:80%;
display:flex;
justify-content:center;
`
const InfoContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:0 auto;
width:50%;
padding-top:10em;
`
const Head=styled.h2`
color:white;`
const Button=styled.button`
padding:16px 30px;
border-radius:22px;
border:none;`


const Main=()=>{
    return(
        <MainContainer>
            <Container>
                <InfoContainer>
                <Head>Let us Come Together and Plant Trees and spread greenery in making earth a better place to live...</Head>
                <Button>Get Involved</Button>
                </InfoContainer>
            </Container>

        </MainContainer>
    )
}
export default Main
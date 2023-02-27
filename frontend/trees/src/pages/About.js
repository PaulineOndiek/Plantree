import styled from "styled-components"
import Nav from "../component/Nav"

const MainContainer=styled.div``
const AboutContainer=styled.div`
background-image:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url("https://images.pexels.com/photos/11534117/pexels-photo-11534117.jpeg?auto=compress&cs=tinysrgb&w=800");
background-repeat:no repeat;
height:600px;
background-position:center;
background-size:cover;
`
const Container=styled.div`
width:80%;
margin:0 auto;

`
const InfoContainer=styled.div`
width:80%;
margin:0 auto;
`
const Information=styled.div``
const Para=styled.p`
color:white;
font-size:4rem;
// font-weight:bold;
padding:1em 2em;
`
const Head=styled.h2`
padding-left:16em;
color:#1A4D2E;
font-weight:bold;`
const Paragraph=styled.p`
`
const ParaList=styled.li`
list-style:none;
`


const About=()=>{
    return(
        <MainContainer>
            <Nav/>
        <AboutContainer>
            
            <Container>

                <Para>Grow a brighter future,<br/>
                    Plant a tree today</Para>

            </Container>
            
        </AboutContainer>
        <InfoContainer>
        <Head>About Us</Head>
        <Paragraph>Plus tree is a collection of individual brought together by the drive to save mother nature.
              <br />We are located in Kenya with the aim of targeting communites and regions that are in need of trees.
              <br />We also organise and improve livelihoods of impoverished farmers by identifying regions and areas that
              <br/> are in need of trees and helping them in tree planting.</Paragraph>
                <Information>
              <Head>Our Mission</Head>
              <Paragraph>Plant a billion trees across the planet to slow the connected crises of climate change and biodiversity loss</Paragraph>
              </Information>
              <Information>
                <Head>Our Vision</Head>
                <Paragraph>We make it simple for everyone to plant a tree. Together we can restore forests, create habitat for biodiversity, and make a positive social impact around the world.</Paragraph>
              </Information>

              <Information>
               <Head>Our Core Values</Head>
               <ParaList>Integrity</ParaList>
               <ParaList>Care</ParaList>
               <ParaList>initiative</ParaList>
               <ParaList>Appreciation for trees</ParaList>

             </Information>
             </InfoContainer>
          
        </MainContainer>
    )
}
export default About
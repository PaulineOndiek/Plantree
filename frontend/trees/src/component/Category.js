import styled from "styled-components" 
import biodiversity from "../images/biodiversity.avif"
import fertility from "../images/fertility.jpg"
import floods from "../images/floods.avif"
import water from "../images/water.jpeg"
const CategoryContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;`
const Containers=styled.div`
display:flex;`
const MainContainer=styled.div`
width:22%;
padding:2em;`
const ImageContainer=styled.div`
height:40vh;
`
const InfoContainer=styled.div``

const Image=styled.img`
width:300px;
height:350px;
object-fit:cover;
`
const Head=styled.h2``
const Para=styled.p``
const Category=()=>{
    return(
        <CategoryContainer>
            <Container>
                <Containers>
                <MainContainer>
                    <ImageContainer>
                <Image src={biodiversity}/>
                </ImageContainer>
                <InfoContainer>
                <Head>Enhancing Biodiversity</Head>
                <Para>Woods fascinate with their ecosystem variety, and one of the richest communities is found in tropical forests. In particular, Amazon rainforests count thousands of tree species and 50,000 other plants, apart from abundant fauna.
    World Resources Institute ranked tropical primary forest losses 2019 third-largest
 in the 21st century. In this regard, rainforest restoration is an ultimately significant task nowadays. It combats rare species extinction, both in the kingdom of plants and the kingdom of animals.</Para>
        </InfoContainer>
                </MainContainer>

                <MainContainer>
                    <ImageContainer>
                <Image src={floods}/>
                </ImageContainer>
                <InfoContainer>
                <Head>Flood Prevention</Head>
                <Para>Trees not only absorb moisture but make a barrier for water flows during floods or downpours. Thus, they slow down the speed of currents and improve water absorption. By impeding floods, reforestation mitigates damage and losses.</Para>
                </InfoContainer>
               </MainContainer>

               <MainContainer>
                <ImageContainer>
                <Image src={fertility}/>
                </ImageContainer>
                <InfoContainer>
                <Head>Enriching Soil Fertility</Head>
                <Para>It is a habitat for soil microorganisms that participate in decomposition, boosting fertility.
                 Fallen leaves and branches form the organic matter.
                Strong root systems hold the earth in place and prevent erosion and landslides.
                Reducing water runoffs, trees conserve nutrients in the soil.</Para>
                </InfoContainer>
               </MainContainer>

                <MainContainer>
                    <ImageContainer>
                <Image src={water}/>
                </ImageContainer>
                <InfoContainer>
                <Head>Maintaining Water Cycle and Water Quality</Head>
                <Para>Trees store rainwater through absorbing it with leaves and roots. At the same time, they also release moisture in the atmosphere via transpiration and increase humidity. This way, forests stabilize the air temperature in the nearby locality. They also help to maintain a sufficient water level in local water bodies. Since trees retain moisture and reduce runoffs, reforestation also improves water infiltration and water quality.</Para>
                </InfoContainer>
                </MainContainer>
                </Containers>
            </Container>
        </CategoryContainer>
    )
}
export default Category
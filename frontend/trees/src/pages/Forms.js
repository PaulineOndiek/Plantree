import styled from "styled-components"
import Nav from "../component/Nav"
import { useState,useEffect } from "react"
const FormContainer=styled.div`
`
const Container=styled.div`
margin:0 auto;
width:80%;
padding-top:2em;`
const Para=styled.div``
const FormsInput=styled.div`
display:flex;
flex-direction:column;
margin:0 auto;
width:60%;
gap:1.3em;
`
const Input=styled.input`
outline:none;
padding:1em 2em;`
const Image=styled.img``
const Button=styled.button`
margin:0 auto;
width:40%;
padding:1em 2em;
color:white;
background:#1A4D2E;
border:none;
border-radius:5px;
cursor:pointer;
`
const Forms=()=>{

    const [input,setInput]=useState({
        name:"",
        phone:"",
        authority:"",
        ownership:"",
        location:"",
        topography:"",
        soil:""

    })
    const[error,setError]=useState("")
    const [empty,setEmpty]=useState([

    ])

    const handleAddition=()=>{
        if (input.name==="" || input.authority===""|| input.ownership===""||input.location===""||input.topography===""||input.soil===""){
       setError("Please input all the required fields")
        }

        if(input.name===""){
          empty.push("name")
        }
        if(input.authority===""){
            empty.push("phone")
        }
        if(input.authority===""){
            empty.push("authority")
        }
        if(input.ownership===""){
            empty.push("ownership")
        }
        if(input.location===""){
            empty.push("location")
        }
        if(input.topography===""){
            empty.push("topography")
        }
        if(input.soil===""){
            empty.push("soil")
        } 
    }



    return(
        <FormContainer>
            <Nav/>
            <Container>
                <FormsInput>
                    <Para>{error}</Para>
                  
                    <Input onChange={(e)=>setInput(prev=>({...prev,name:e.target.value}))} placeholder="Name:"/>
                    <Input onChange={(e)=>setInput(prev=>({...prev,phone:e.target.value }))} placeholder="Phone Number:"/>
                    <Input onChange={(e)=>setInput(prev=>({...prev, authority:e.target.value}))} placeholder="Authority:"/>
                    <Input onChange={(e)=>setInput(prev=>({...prev,ownership:e.target.value}))}  placeholder="Ownership:"/>
                    <Input onChange={(e)=>setInput(prev=>({...prev,location:e.target.value}))} placeholder="Location:"/>
                    <Input  onChange={(e)=>setInput(prev=>({...prev,topography:e.target.value}))} placeholder="Topgraphy:"/>
                    <Input onChange={(e)=>setInput(prev=>({...prev,soil:e.target.value}))} placeholder="Soil:"/>
                    <Image/>
                    <Button onClick={handleAddition}>Make the Planet Greener</Button>
                </FormsInput>
            </Container>
        </FormContainer>
    )
}
export default Forms
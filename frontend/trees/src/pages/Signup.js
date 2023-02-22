import styled from "styled-components"
import Nav from "../component/Nav"
import { useEffect, useState } from "react"
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
    
const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    confirm:""
})
const [empty,setEmpty]=useState([])
const [error,setError]=useState("")

const handleUsers=()=>{
    if(user.name===""||user.email===""||user.password===""||user.confirm===""){
        return({error:"Please Input all the Required Fields"})
    }

    if (user.name===""){
        empty.push("name")
    }
    if(user.email===""){
        empty.push("email")
    }if(user.password===""){
        empty.push("password")
    }
    if(user.confirm===""){
        empty.push("confirm")
    }

}

useEffect(()=>{
    const fetchUsers=async()=>{
        const getUser=await fetch ("http://localhost:8001/api/users")
        const fetchJson=await getUser.json() 

    }
    
},
[])

    return(
        <SignContainer>
            <Nav/>
            <Container>
                <Para>Make Our Planet Greener!!</Para>
                <Head>Create Your Account</Head>
                <Inputs>
                <Para>{error}</Para>
                <Input  onChange={(e)=>setUser(prev=>({...prev,name:e.target.value}))} placeholder="Name"/>
                <Input onChange={(e)=>setUser(prev=>({...prev,email:e.target.value}))} placeholder="Email"/>
                <Input onChange={(e)=>setUser(prev=>({...prev,password:e.target.value}))} placeholder="Password"/>
                <Input onChange={(e)=>setUser(prev=>({...prev,confirm:e.target.value}))} placeholder="Confirm Password"/>
               
                <Button>Register</Button>
                <Para>Have Account Already??</Para>
                </Inputs>

            </Container>
        </SignContainer>
    )
}
export default Signup
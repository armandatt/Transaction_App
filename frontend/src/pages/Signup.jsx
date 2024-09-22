import { useState } from "react"
import { BottomWarning } from "../components/bottomwarning"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputbox"
import { SubHeading } from "../components/sub-heading"
import '../index.css'
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate()

    
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={(e) => {
            setFirstName(e.target.value)
        }} placeholder="John" label={"First Name"} />
        <InputBox onChange= {(e) => {
            setLastName(e.target.value)
        }}placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={(e) => {
            setUsername(e.target.value)
        }} placeholder="akshar@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
            setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick ={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username : username,
                firstName : firstName,
                lastName : lastName,
                password : password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}
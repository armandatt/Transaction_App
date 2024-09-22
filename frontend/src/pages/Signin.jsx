import axios from "axios"
import { BottomWarning } from "../components/bottomwarning"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputbox"
import { SubHeading } from "../components/sub-heading"
import '../index.css'
import { useNavigate } from "react-router-dom"
// const bcrypt = require('bcryptjs');
// import {User} from "../../../backend/db"


// import { User } from "../../../backend/db"

export const Signin = () => {
  
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange = {(e) => {
          setUsername(e.target.value)
        }}placeholder="akshar@gmail.com" label={"Email"} />
        <InputBox onChange = {(e) => {
          setPassword(e.target.value)
        }}placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}
import { useState } from "react"
import { Appbar } from "../components/appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/users"
import axios from "axios"

export const Dashboard = () => {
    // const [balance , setBalance] = useState([]);
    // async function GetBalance(){
    //     const responce = await axios.get("http://localhost:3000/api/v1/user/account/balance")
    //     const data = responce.value
    //     return data
    // }
    // const fetched_data = GetBalance()
    // const fetchBalance = async () => {
    //     const userBalance = await axios.get("http://localhost:3000/api/v1/account/balance", {
    //         userId : localStorage.getItem("token")
    //     })
    //     return userBalance
    // }

    return (
        <div>
            <Appbar ></Appbar>
            <Balance value = {"10000"} ></Balance>
            <Users></Users>
        </div>
    )
}


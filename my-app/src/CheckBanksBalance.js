import React from "react"
import axios from "axios"

class CheckBankBalance extends React.Component
{
    constructor()
    {
        super()
        this.state={
           
            balance:""
        }
       this.handleChange=this.handleChange.bind(this)
    }
   
   handleChange=async()=>
   {
       const res=await axios("http://localhost:3003/getbalofbank")
       console.log("the balance in the bank is",res.data)
       this.setState({
           balance:res.data
       })
   }

    render()
    {
        return(
            <div>
             <p>CheckBank's Balance</p>   
            <button onClick={this.handleChange}>CheckBalance</button>
            {this.state.balance!==""?<h2>The balance  in bank in Wei is {this.state.balance}</h2>:""}
            </div>
        )
    }
}
export default CheckBankBalance
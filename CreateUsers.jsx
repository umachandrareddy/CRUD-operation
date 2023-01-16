import axios from "axios"
import { useState } from "react"
import style from "./homecrud.module.css"
import { useNavigate } from "react-router-dom"
const CreateUsers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [designation,setDesignation]=useState("")
    let navigate = useNavigate() 

    let nameData=(e)=>{ 
        setName(e.target.value)
    }
    let salData=(e)=>{
        setSalary(e.target.value)
    }
    let designationData=(e)=>{
        setDesignation(e.target.value)
    }


    let formHandler=(e)=>{
        e.preventDefault()
        {/*console.log(name);
        console.log(salary);
        console.log(company);*/}
        let payload={name,salary,designation}
        axios.post("http://localhost:3000/data",payload)
        .then(()=>{
            console.log("DATA HAS BEEN ADDED");
        })
        .catch(()=>{
            console.log("PLEASE ADD THE DATA");
        })
        navigate("/users")
    }
    return(
        <div id={style.myForm}>
            <form>
                
                <label>Name</label>
               <input type="text" value={name} onChange={nameData} />

                <label>Designation</label>  
                <input type="text" value={designation} onChange={designationData} />

                <label>Salary</label>
                <input type="number" value={salary} onChange={salData} />

                <table>
                <td><button>reset</button></td>
                    <td> <button onClick={formHandler}>Save</button> 
                </td>
                
                </table>
              
            </form>
        </div>
    )
}
export default CreateUsers





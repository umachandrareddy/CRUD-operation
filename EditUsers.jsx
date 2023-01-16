import { Link, useNavigate, useParams } from "react-router-dom"
import style from "./homecrud.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

const EditUsers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [designation,setDesignation]=useState("") 
    let navigate = useNavigate()

    let {abc} = useParams()
    console.log(abc);

useEffect(()=>{
    axios.get(`http://localhost:3000/data/${abc}`)
    .then((response)=>{
         console.log(response.data)
        setName(response.data.name)
        setSalary(response.data.salary) 
        setDesignation(response.data.designation)
    })
},[])
    let formHandler=()=>{
        let payload= {name,salary,designation}
        axios.put(`http://localhost:3000/data/${abc}`,payload)
        .then(()=>{
            console.log("data has been updated");
        })
        navigate("/users")
    }

    return(
        <div id={style.myForm}>
        <form>
            <article id={style.emp}>employee details</article>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <label>Salary</label>
            <input type="number" value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
            <label>designation</label>
            <input type="text" value={designation} onChange={(e)=>{setDesignation(e.target.value)}}  />
            <button onClick={formHandler}>Submit</button>
        </form>
    </div>
    )
}
export default EditUsers
import axios from "axios"
import { useEffect, useState } from "react"
import style from "./homecrud.module.css"
import { Link, useNavigate } from "react-router-dom"

const Users=()=>{
    let [content,setContent]=useState([])


    useEffect(()=>{ 
        axios.get("http://localhost:3000/data")
        .then((response)=>{
            //console.log(responce.data);
            setContent(response.data)
        })
    },[])
    let deleData=(x)=>{
        <script> confirm ("are you sure you want delete?")</script>
        axios.delete(`http://localhost:3000/data/${x}`)
        window.location.assign("/users")
    }
    return(
        <div id={style.box}>
            
            {content.map((x)=>{
                return(
                    <div id={style.profile}>
                        <table>
                            <tr><td><h2>Employee{x.id}</h2></td></tr>
                            <tr>
                                <td>name:</td>
                                <td>{x.name}</td>
                            </tr>
                            <tr>
                                <td>designation :</td>
                                <td>{x.designation}</td>
                            </tr>
                            <tr>
                                <td>salary :</td>
                                <td>{x.salary}</td>
                            </tr>
                            <td><button id={style.btn}> <Link to={`/edit/${x.id}`}>Edit</Link> </button></td>
                             <td><button id={style.del} onClick={()=>(deleData(x.id))}>Delete</button></td>
                        
                       </table>
                    </div>
                )
            })}
        </div>
    )
}
export default Users
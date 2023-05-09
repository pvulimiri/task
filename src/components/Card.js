import {  useEffect,useState } from "react";
// import {fromEvent} from 'rxjs'
import './card.css'
import { rxjsStore } from "../Store/rxjsStore";


export default function Card(props){
    // const {item,value} = props
    const {item} = props
    // const value = localStorage.getItem("value")
    // const [value, setValue] = useState(localStorage.getItem("value"));
    const [value, setValue] = useState(1);

    // window.addEventListener('value', ()=> {
    //     const value = localStorage.getItem("value")
    //     setValue(value)
    // })
    
    useEffect(()=>{
        rxjsStore.getGlobalValue().subscribe(v =>{
          setValue(v)
        })
        
      },[])
    return(
        <div className='card-container'>
            <h1 className='card-main-heading'>{item.name}</h1>
            <h2>{value}</h2>
            <p>Type:{item.type}</p>
            <p>Muscle:{item.muscle}</p>
            <p>Equipment:{item.equipment}</p>
            <p>Difficulty:{item.difficulty}</p>
            <p>Instructions:{item.instructions}</p>
          </div>
    )
}
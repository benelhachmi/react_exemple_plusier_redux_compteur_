import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './Compteur.css'


export default function Compteur() {
    const {count,name} =useSelector(state => ({
        ...state.conteurReducer,
        ...state.NameReducer
    }))
    const dispatch = useDispatch();
const increment = () => { 
dispatch({
    type:'INCR'
})
}

const decrement = () => {
    dispatch({
        type:'DECR'
    })  
}


    return (
        <div>
            <h2>Compteur :{count}</h2>
            <div className="block-btn">
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </div>
            <h2>{name}</h2>
        </div>
    )
}

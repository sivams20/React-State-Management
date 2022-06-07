import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

function NewCakeContainer(){
    const [number, setNumber] = useState(1);
    const numberOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Cakes Available {numberOfCakes}</h2>
            <input type="text" value={number} onChange={ e=> setNumber(e.target.value) } />
            <button onClick={ ()=> dispatch(buyCake(number)) }>Buy Cake</button>
        </div>
    )
}

export default NewCakeContainer;

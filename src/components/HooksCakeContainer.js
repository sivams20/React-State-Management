import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/index';

function HooksCakeContainer(){
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Num of Cakes - <span data-testid="numCakes">{numOfCakes}</span></h2>
            <button onClick={()=> dispatch(buyCake())} data-testid="buyCake">Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;

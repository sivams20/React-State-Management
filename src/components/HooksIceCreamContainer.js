import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/index";

function HooksIceCreamContainer(){
    const numberOfIceCream = useSelector(state=>state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Number of IceCreams - <span data-testid="numIcecream">{numberOfIceCream}</span></h2>
            <button onClick={()=> dispatch(buyIceCream())} data-testid="buyIce">Buy Ice Cream</button>
        </div>
    )
}

export default HooksIceCreamContainer;

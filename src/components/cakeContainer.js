import React from "react";
import { buyCake } from '../redux/index';
import { connect } from 'react-redux';

function CakeContainer(props){
    return(
        <div>
            <h2>Number of cakes <span data-testid="numCakes">{props.numOfCakes}</span></h2>
            <button onClick={props.buyCake} data-testid="buyCake">Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

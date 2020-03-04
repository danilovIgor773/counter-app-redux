import React, {Component} from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';

class Counter extends Component{
    state = {
        counter: 0
    };

    render(){
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 5" clicked={this.props.addValue} />
                <CounterControl label="Subtract 5" clicked={this.props.subtractValue} />
                <hr />
                <button onClick={this.props.storeRes}>STORE RESULTS</button>
                <ul>
                    {this.props.storedResults.map(res => 
                        <li key={res.id}onClick={() => this.props.deleteRes(res.id)}>{res.value}</li>    
                    )}                    
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIncrement: () => dispatch({type: actions.INCREMENT}), //Here we dispatching our actions and passing them to props, to use them in a component
        onDecrement: () => dispatch({type: actions.DECREMENT}),
        addValue: () => dispatch({type: actions.ADD_VALUE, value: 5}),
        subtractValue: () => dispatch({type: actions.SUBTRACT_VALUE, value: 5}),
        storeRes: () => dispatch({type: actions.STORE_RESULTS}),
        deleteRes: (id) => dispatch({type: actions.DELETE_RESULTS, resId: id}) //here we pass the arg (id of element) to arrow func from our ui and then use this id as a payload
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}; // This is so to say config for connecting the component with store in order to listen to its updates and react to user actions
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is a function that returns hoc and as a first arg receives a config map obj that provides data from store 
//this data is available in component via props.
//Second arg is a component that is expected to be connected to store.
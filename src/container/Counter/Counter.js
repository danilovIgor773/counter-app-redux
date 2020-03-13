import React, {Component} from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import {connect} from 'react-redux';

import * as actionCreators from '../../store/actions/index';

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
                <button onClick={() => this.props.storeRes(this.props.ctr)}>STORE RESULTS</button>
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
        onIncrement: () => dispatch(actionCreators.increment()), //Here we dispatching our actions (action creator is passed inside dispatch fn) and passing them to props, to use them in a component
        onDecrement: () => dispatch(actionCreators.decrement()),
        addValue: () => dispatch(actionCreators.addValue(5)),
        subtractValue: () => dispatch(actionCreators.subtractValue(5)),
        storeRes: (result) => dispatch(actionCreators.storeResults(result)),
        deleteRes: (id) => dispatch(actionCreators.deleteResults(id)) //here we pass the arg (id of element) to arrow func from our ui and then use this id as a payload
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}; // This is so to say config for connecting the component with store in order to listen to its updates and react to user actions
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is a function that returns hoc and as a first arg receives a config map obj that provides data from store 
//this data is available in component via props.
//Second arg is a component that is expected to be connected to store.
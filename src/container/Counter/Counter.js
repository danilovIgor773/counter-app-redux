import React, {Component} from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import {connect} from 'react-redux';

class Counter extends Component{
    state = {
        counter: 0
    };

    // counterChangedHandler = (action, value) => {
    //     // eslint-disable-next-line default-case
    //     switch(action){
    //         case 'inc':
    //             this.setState(prevState => {return {counter: prevState.counter + 1}});
    //             break;
    //         case 'dec':
    //             this.setState(prevState => {return {counter: prevState.counter - 1}});
    //             break;
    //         case 'add':
    //             this.setState(prevState => {return {counter: prevState.counter + value}});
    //             break;
    //         case 'sub':
    //             this.setState(prevState => {return {counter: prevState.counter - value}});
    //             break;            
    //     }
    // }


    render(){
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 5" clicked={this.props.addValue} />
                <CounterControl label="Subtract 5" clicked={this.props.subtractValue} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIncrement: () => dispatch({type: 'INCREMENT'}), //Here we dispatching our actions and passing them to props, to use them in a component
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        addValue: () => dispatch({type: 'ADD_VALUE', value: 5}),
        subtractValue: () => dispatch({type: 'SUBTRACT_VALUE', value: 5})
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}; // This is so to say config for connecting the component with store in order to listen to its updates and react to user actions
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is a function that returns hoc and as a first arg receives a config map obj that provides data from store 
//this data is available in component via props.
//Second arg is a component that is expected to be connected to store.
import React, { Component } from 'react';

// connect(state, action) becomes a function & returns an hoc
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionCreators from '../../store/actions/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    { this.props.storedResults.map( result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
                            {result.value}
                        </li>
                    ) ) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // access through global state defined in index.js
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
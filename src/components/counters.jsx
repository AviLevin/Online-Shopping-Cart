import React, { Component } from 'react';
import Counter from "../counter";

class counters extends Component {
    render() {

        const { onReset, counters, onIncrement, onDelete } = this.props;
        return (
            <div>
                <br />
                <div className="container">
                    <button onClick={onReset} className="btn btn-primary  btn-lg">Reset</button>



                    <div className="row">
                        {counters.map(counter => (
                            <Counter
                                key={counter.id}
                                onIncrement={onIncrement}
                                onDelete={onDelete}
                                counter={counter}
                            />
                        ))}
                    </div>
                </div>



            </div>
        );
    }
}

export default counters;
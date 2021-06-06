import React, { Component } from 'react';
import Counter from "../counter";

class counters extends Component {
    render() {

        const { onReset, counters, onIncrement, onDelete } = this.props;
        return (
            <div>
                <br />

                <button onClick={onReset} className="btn btn-primary sm 2 m2">Reset</button>


                <div className="container">
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
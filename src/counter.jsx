import React, { Component } from 'react';
import './counter.css';
// import mp1 from '../src/images/mp2.jpeg';

class Counter extends Component {


    //    const mp1 = require("../src/images/mp1.png");




    render() {


        return (


            

                    <div className="card new1" style={{ width: '18rem' }}>
                        <img className="card-img-top mp1" src={this.props.counter.imgUrl} alt="Card image cap" />
                        <div className="card-body">


                            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                            <button
                                onClick={() => this.props.onIncrement(this.props.counter)}
                                className="btn btn-secondary btn-sm" > Increment me</button>

                            <button
                                onClick={() => this.props.onDelete(this.props.counter.id)}
                                type="button" className="btn btn-danger btn-sm m-2">delete</button>
                        </div>
                    </div>

           



        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "success";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "zero" : value;
    }

}

export default Counter;
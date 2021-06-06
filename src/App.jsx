import React, { Component } from 'react';
import Nav from "../src/components/nav";
import Counters from "../src/components/counters";


class App extends Component {
    state = {
        counters: [
            { id: 1, value: 6, imgUrl: 'https://cdn.okay.lk/wp-content/uploads/2020/12/31204029/viboton-tinji-tj-08-wired-gaming-mouse-6d-optical-7-button-led-original-imafqyd9jdyefsqe.jpeg'},
            { id: 2, value: 4, imgUrl: 'https://specials-images.forbesimg.com/imageserve/5d39e87f95e0230008f68da2/960x0.jpg?cropX1=7&cropX2=1200&cropY1=307&cropY2=1102' },
            { id: 3, value: 0, imgUrl: 'https://matlinglass.com/wp-content/uploads/2019/07/2-min-6.jpg'},
            { id: 4, value: 4, imgUrl:"https://www.gadgetsay.com/wp-content/uploads/2020/05/72f082025aafa40fc30e307b4c02b44979f0193d.jpeg" },
            { id: 5, value: 23, imgUrl:"https://luxurylaunches.com/wp-content/uploads/2012/05/pentax-645d-40mp.jpg" },
            { id: 6, value: 6, imgUrl:"https://2.img-dpreview.com/files/p/E~C0x0S640x360T1200x675~articles/2891284972/lens2.jpg" },
        ]
    };


    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
       this.setState({ counters });

    }

    handleDelete = counter => {
        const counters = this.state.counters.filter(c => c.id !== counter);
        this.setState({ counters });
        console.log( "deleted")
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters });
    }

    render() {
        return (
            <React.Fragment>
                < Nav totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main>

                    <Counters 
                    counters={this.state.counters}
                    onReset= {this.handleReset}
                    onIncrement= {this.handleIncrement}
                    onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
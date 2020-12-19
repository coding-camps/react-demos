import React from "react";
import "./numcounter.scss"

export default class Numcounter extends React.Component {
    constructor(propsx) {
        super(propsx);
        this.state = {num: 1};
        // this.addNumx = this.addNum.bind(this);
    }

    // addNum() {
    //     this.setState({
    //         num: this.state.num + 1
    //     })
    // }
    addNumx = () => {
        this.setState({num: this.state.num + 1})
    }

    render() {
        return (
            <div className="num-updater">
                <span>{this.state.num}</span>
                <button onClick={this.addNumx}>UpdaterX</button>
            </div>
        );
    }
}
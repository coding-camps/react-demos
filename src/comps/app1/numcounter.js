import React from "react";

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
            <div className="num-updater" style={{margin: "1rem"}}>
                <span style={{
                    border: "dotted 1px yellowgreen",
                    margin: "1rem",
                    padding: "0.5rem",
                }}>{this.state.num}</span>
                <button style={{height: "3em"}} onClick={this.addNumx}>UpdaterX</button>
            </div>
        );
    }
}

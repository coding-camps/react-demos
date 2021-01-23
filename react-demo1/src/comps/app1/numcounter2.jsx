import React from "react";

export default class NumCounter2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.showState = this.showState.bind(this);
    }

    showState() {
        console.log("show state -> ", this.state.count);
    }

    componentDidMount() {
        let updater = (n) => {
            return (state) => {
                console.log(`第${n}次 setState 后的count值 -> `, state.count);
                return {count: state.count + 1};
            };
        };
        this.setState(updater(1));
        this.setState(updater(2));
        this.setState(updater(3));
    }

    render() {
        return (
            <div>
                <button onClick={this.showState}>
                    show current state
                </button>
                &nbsp;&nbsp;
                {this.state.count}
            </div>
        );
    }
}

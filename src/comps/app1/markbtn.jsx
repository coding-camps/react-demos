import React from "react";
import {marked} from "marked";

class Markbtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {htmlView: {__html: "loading..."}};
        this.handleClick = this.handleClick.bind(this);
        this.handleCls = this.handleCls.bind(this);
    }

    handleClick(event) {
        fetch(`/hello.md`)
            .then((resp) => resp.text())
            .then((text) => {
                this.setState({htmlView: {__html: marked.parse(text)}});
            });
    }

    handleCls(event) {
        this.setState({htmlView: {__html: "loading..."}});
    }

    render() {
        return (
            <>
                <button
                    onClick={this.handleClick}
                    style={{width: "100px"}}
                >
                    Click
                </button>
                |
                <button onClick={this.handleCls} style={{width: "100px"}}>Clear</button>
                <div style={{display: "block"}} dangerouslySetInnerHTML={this.state.htmlView}>
                </div>
            </>
        );
    }

};

export default Markbtn;

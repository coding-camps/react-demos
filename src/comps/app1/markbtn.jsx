import React from "react";
import {Button} from "antd";
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from "remark-gfm";
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
    handleCls (event) {
        this.setState({htmlView: {__html:"loading..."}});
    }

    render() {
        return (
            <>
                <Button
                    onClick={this.handleClick}
                    style={{ width: "100px" }}
                >
                    Click
                </Button>
                |
                <Button onClick={this.handleCls} style={{width: "100px"}}>Clear</Button>
                <div style={{display: "block"}} dangerouslySetInnerHTML={this.state.htmlView}>
                </div>
            </>
        );
    }

};

export default Markbtn;
import {marked} from "marked";
import {Component} from "react";
import Bus from "../../utils/eventBus";


class Markbtn extends Component {

    constructor(props) {
        super(props);
        this.state = {htmlView: {__html: "loading..."}};
        this.handleClick = this.handleClick.bind(this);
        this.handleCls = this.handleCls.bind(this);
    }

    handleClick(event) {
        fetch(`/api/app1/markdown-text.md`)
            .then((resp) => resp.text())
            .then((text) => {
                this.setState({htmlView: {__html: marked.parse(text)}});
            });
    }

    handleCls(event) {
        this.setState({htmlView: {__html: "loading..."}});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        Bus.emit("load", "hello");
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

import React from "react";
import _ from 'lodash';

class Sayhello extends React.Component {
    static defaultProps = {
        name: "天使"
    }

    render() {
        const style = {
            margin: "10px",
            display: "contents",
        };
        return (
            <span style={style} className="sayHello">
                Hello {this.props.name}
            </span>
        );
    }
}

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.changeContent = _.debounce(this.changeContent.bind(this), 200);
        this.state = {};
    }

    changeContent(e) {
        this.setState({
            inputContent: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeContent} maxLength="10"
                       style={{width: "10rem", margin: "0.5rem 0.5rem 0 0",}}/>
                <Sayhello name={this.state.inputContent}/>
            </div>
        );
    }

}

export default class DemoProps extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Sayhello name={"React"}/> | <Sayhello/>
                </div>
                <Hello/>
            </>
        );
    };
}

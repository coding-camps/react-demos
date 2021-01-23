import {Component} from "react";

class Son extends Component {
    constructor(props) {
        super(props);
        console.log("unmounting-3 constructor(props)");
    }

    render() {
        console.log("unmounting-3 render()");
        return (<div>观察的组件：{this.props.name}</div>);
    }

    componentWillUnmount() {
        console.log("unmounting-3 componentWillUnmount()");
    }
}

class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "React", isShow: true};
        this.updateChildProps = this.updateChildProps.bind(this);
    }

    updateChildProps() {
        this.setState({name: this.state.name === "React" ? "Vue" : "React"});
    }

    delComponent() {
        this.setState({isShow: !this.state.isShow});
    }

    render() {
        return (
            <div>
                <div>{this.state.isShow
                    ? <Son name={this.state.name}/>
                    : <div>组件已被卸载</div>
                }</div>
                <button onClick={this.updateChildProps}>更新子组件</button>
                <button onClick={this.delComponent.bind(this)}>{this.state.isShow ? "卸载" : "加载"}子组件</button>
            </div>
        );
    }
}

export default function LifecycleC3() {
    return (<div><Father/></div>);
}

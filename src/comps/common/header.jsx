import React from "react";
import {Link} from "react-router-dom";
import { BackTop } from 'antd';
import "./header.scss";

export default class Header extends React.Component {

    static defaultProps = {
        titles: []
    }

    render() {
        const upStyle = {
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,
        };
        return (
            <React.StrictMode>
                <div className="App">
                    <header className="App-header">
                        <div className="title">{
                            this.props.titles
                                .filter((v, i) => (i < 2))
                                .map((v, i) => {
                                    switch (i + 1) {
                                        case 1:
                                            return (<h1 key={i}>{v}</h1>);
                                        default:
                                            return (<h3 key={i}>{v}</h3>);
                                    }
                                })
                        }</div>
                        <nav className="menu">
                            <Link to="/">Home</Link>
                            <Link to="/app1">App1</Link>
                            <Link to="/app2">App2</Link>
                            <Link to="/app3">App3</Link>
                        </nav>
                        {this.props.children}
                    </header>
                    <BackTop>
                        <div style={upStyle}>UP</div>
                    </BackTop>
                </div>
            </React.StrictMode>
        );
    }

}
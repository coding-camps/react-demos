import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";

export default class Header extends React.Component {

    static defaultProps = {
        titles: []
    }

    render() {
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
                    </header>
                    {this.props.children}
                </div>
            </React.StrictMode>
        );
    }

}
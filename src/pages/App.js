import React from "react";
import logo from '../static/images/logo.svg';
import Header from "../comps/common/header";

function App() {
    return (
        <Header titles={["Homepage", "-"]}>
            <img src={logo} className="App-logo" alt="logo"/>
        </Header>
    );
}

export default App;

import React from "react";
import PageLayout from "../comps/common/pagelayout";
import logo from '../static/images/logo.svg';

function App() {
    return (
        <PageLayout titles={["Homepage", "-"]}>
            <img src={logo} className="App-logo" alt="logo"/>
        </PageLayout>
    );
}

export default App;

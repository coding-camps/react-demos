import React from "react";
import Sayhello from "../comps/app1/sayhello";
import Header from "../comps/common/header";
import Numcounter from "../comps/app1/numcounter";
import Markbtn from "../comps/app1/markbtn";
import Testblock from "../comps/common/testblock";
import ColorUpdater from "../comps/app1/colorupdater";
import Clock from "../comps/app1/click";

function App1() {
    return (
        <Header titles={["App1", "understand basic conceptions"]}>
            <Testblock blockName="props">
                <Sayhello name={"React"}/> | <Sayhello/>
            </Testblock>

            <Testblock blockName={"state"}>
                <ColorUpdater></ColorUpdater>
            </Testblock>

            <Testblock blockName={"component life"}>
                <Clock/>
            </Testblock>

            <Testblock blockName="out link">
                <a href="https://www.baidu.com">baidu</a>  baidu
            </Testblock>

            <Testblock blockName="counter">
                <Numcounter/>
            </Testblock>

            <Testblock blockName={"markdown: fetch, props"}>
                <Markbtn/>
            </Testblock>
        </Header>
    );
}

export default App1;
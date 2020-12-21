import React from "react";
import PageLayout from "../comps/common/pagelayout";
import Testblock from "../comps/common/testblock";
import Sayhello from "../comps/app1/sayhello";
import ColorUpdater from "../comps/app1/colorupdater";
import Clock from "../comps/app1/clock";
import Numcounter from "../comps/app1/numcounter";
import Markbtn from "../comps/app1/markbtn";

function App1() {
    return (
        <PageLayout titles={["App1", "understand basic conceptions"]}>
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
                <a href="https://www.baidu.com">baidu</a> baidu
            </Testblock>

            <Testblock blockName="counter">
                <Numcounter/>
            </Testblock>

            <Testblock blockName={"markdown: fetch, props"}>
                <Markbtn/>
            </Testblock>
        </PageLayout>
    );
}

export default App1;

import React from "react";
import PageLayout from "../comps/common/pagelayout";
import Testblock from "../comps/common/testblock";
import Sayhello from "../comps/app1/sayhello";
import ColorUpdater from "../comps/app1/colorupdater";
import Clock from "../comps/app1/clock";
import Numcounter from "../comps/app1/numcounter";
import Markbtn from "../comps/app1/markbtn";
import Comm1PC from "../comps/app1/comm1PC";
import Comm2CP from "../comps/app1/comm2CP";
import Comm3CC from "../comps/app1/comm3CC";
import Commx from "../comps/app1/commx";
import Commy from "../comps/app1/commy";
import Commz from "../comps/app1/commz";

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

            <Testblock blockName={"communication: parent -> child: (by class and function)"}>
                <Testblock blockName={"communication: parent -> child"}>
                    <Comm1PC/>
                </Testblock>
                <Testblock blockName={"communication: 父更新子"}>
                    <Commx/>
                </Testblock>
            </Testblock>

            <Testblock blockName={"communication: child -> parent: (by class and function)"}>
                <Comm2CP/>
            </Testblock>

            <Testblock blockName={"communication: child1 -> child2, child3: (by class and function)"}>
                <Comm3CC/>
            </Testblock>

            <Testblock blockName={"communication: 子更新父"}>
                <Commy/>
            </Testblock>
            <Testblock blockName={"communication: 兄弟间通信"}>
                <Commz/>
            </Testblock>
        </PageLayout>
    );
}

export default App1;

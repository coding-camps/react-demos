import React from "react";
import {Link, Outlet} from "react-router-dom";
import PageLayout from "../comps/common/pagelayout";
import Testblock from "../comps/common/testblock";

export default function App2() {
    return (
        <PageLayout titles={["App2", "react router"]}>
            <Testblock blockName={"router offical demo"}>
                <nav>
                    <Link to="/app2">Home</Link> |
                    <Link to="invoices">Invoices</Link> |
                    <Link to="expenses">Expenses</Link>
                </nav>
                <Outlet/>
            </Testblock>
        </PageLayout>
    );
}

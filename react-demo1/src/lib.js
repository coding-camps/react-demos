import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './pages/App';
import App1 from "./pages/App1";
import App2 from "./pages/App2";
import App3 from "./pages/App3";
import Invoices from "./routers/app2/invoices";
import Expenses from "./routers/app2/expences";
import Invoice from "./routers/app2/invoice";
import _ from "lodash";
import {updateMathjax} from "./utils/helper";
import {THROTTLE_MATHJAX_TIME} from "./utils/constants";
import Bus from "./utils/eventBus";

export default class Lib extends Component {
    constructor(props) {
        super(props);
        this.handleUpdateMathjax = _.throttle(updateMathjax, THROTTLE_MATHJAX_TIME);
    }

    componentDidMount() {
        try {
            window.MathJax = {
                tex: {
                    inlineMath: [["$", "$"]],
                    displayMath: [["$$", "$$"]],
                    tags: "ams",
                }, svg: {
                    fontCache: "none",
                }, options: {
                    skipHtmlTags: ['svg'],
                    enableAssistiveMml: false,
                },
            };
            // eslint-disable-next-line
            require("mathjax/es5/tex-svg-full");

            // event bus
            Bus.addListener("load", (msg) => {
                this.handleUpdateMathjax();
            });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (<BrowserRouter>
            <Routes>
                {/* homepage */}
                <Route path="/" element={<App/>}>
                </Route>
                {/* step 1: understand basic */}
                <Route path="/app1" element={<App1/>}>
                </Route>
                {/* step 2: react router */}
                <Route path="/app2" element={<App2/>}>
                    <Route path="invoices" element={<Invoices/>}>
                        <Route index element={<main style={{padding: "1rem"}}>
                            <p>Select an Invoice.</p>
                        </main>}/>
                        <Route path=":invoiceId" element={<Invoice/>}/>
                    </Route>
                    <Route path="expenses" element={<Expenses/>}/>
                    <Route
                        path="*"
                        element={<main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>}
                    />
                </Route>
                {/* step 3: react redux */}
                <Route path="/app3" element={<App3/>}>
                </Route>
            </Routes>
        </BrowserRouter>);
    }
}

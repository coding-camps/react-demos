import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './pages/App';
import App1 from "./pages/App1";
import App2 from "./pages/App2";
import App3 from "./pages/App3";
import Invoices from "./routers/app2/invoices";
import Expenses from "./routers/app2/expences";
import Invoice from "./routers/app2/invoice";
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
    <BrowserRouter>
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
                    <Route index element={
                        <main style={{padding: "1rem"}}>
                            <p>Select an Invoice.</p>
                        </main>
                    }/>
                    <Route path=":invoiceId" element={<Invoice/>}/>
                </Route>
                <Route path="expenses" element={<Expenses/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
            {/* step 3: react redux */}
            <Route path="/app3" element={<App3/>}>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

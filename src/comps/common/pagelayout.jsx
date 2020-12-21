import React from "react";
import Header from "./header";
import Footer from "./footer";

export default class PageLayout extends React.Component {

    render() {
        return (
            <React.StrictMode>
                <div className="App">
                    <Header titles={this.props.titles}/>
                    <div className={"main"}>
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </React.StrictMode>
        );
    }

}

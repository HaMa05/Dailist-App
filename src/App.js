import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NoContent from "./Components/NoContent/NoContent";
import Content from "./Components/Content/Content";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            hasContent: true,
        };
    }

    render() {
        let { hasContent} = this.state;
        return (
            <div className='App'>
                <div className='container'>
                    <div className='container-content'>
                        <Header />
                        {hasContent && <Content />}
                        {!hasContent && <NoContent />}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

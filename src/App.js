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
            keyStorage: "dailist",
            Upcoming: [],
            Finishing: [],
        };
        this.finishItem = this.finishItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }

    finishItem(event) {
        this.setState({});
    }

    addItem(title) {
        if (!title) {
            return;
        }

        title = title.trim();
        if (!title) {
            return;
        }
        let { Upcoming } = this.state;

        this.setState({
            Upcoming: [
                ...this.state.Upcoming,
                {
                    title: title,
                    number: Upcoming.length + 1,
                    isComplete: false,
                },
            ],
        });
    }

    onComplete(e) {
        return (event) => {
            const { Upcoming, Finishing } = this.state;
            // let isComplete = e.isComplete;
            let index = Upcoming.indexOf(e);
            this.setState({
                Upcoming: [
                    ...Upcoming.filter((e) => Upcoming.indexOf(e) !== index),
                ],
                Finishing: [
                    ...Finishing,
                    { title: e.title, number: e.number, isComplete: true },
                ],
            });
        };
    }

    render() {
        let { hasContent, keyStorage, Upcoming, Finishing } = this.state;
        if (Upcoming.length === 0 && Finishing.length === 0) {
            return (
                <div className='App'>
                    <div className='container'>
                        <div className='container-content'>
                            <Header />
                            <NoContent />
                            <Footer addItem={this.addItem} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='App'>
                    <div className='container'>
                        <div className='container-content'>
                            <Header />
                            {!hasContent && <NoContent />}
                            {hasContent && (
                                <Content
                                    keyStorage={keyStorage}
                                    Upcoming={Upcoming}
                                    Finishing={Finishing}
                                    isComplete={this.onComplete}
                                />
                            )}
                            <Footer addItem={this.addItem} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default App;

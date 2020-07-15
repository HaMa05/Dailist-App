import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <div className='input__item'>
                <input type='text' placeholder='What is your item ?' className="border-r"/>
                <button className="btn border-r" onClick={this.props.onClick}>Add</button>
            </div>
        );
    }
}

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            hasInput: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({
            hasInput: !this.state.hasInput,
        });
    }

    render() {
        if (this.state.hasInput) {
            return(
                <footer className="hasInput">
                    <Input onClick={this.onClick}/>
                </footer>
            );
        } else {
            return (
                <footer>
                    <div className='icon-plus'>
                        <i
                            className='fas fa-plus-circle circle'
                            onClick={this.onClick}></i>
                        {/* {this.state.hasInput && <Input />} */}
                    </div>
                </footer>
            );
        }
    }
}

export default Footer;

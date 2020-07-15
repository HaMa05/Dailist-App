import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({
            title: "",
        });
    }
    render() {
        return (
            <form className='input__item' onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder='What is your item ?'
                    className='border-r'
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    className='btn border-r'
                    type='submit'
                    value='Add'
                />
            </form>
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
            return (
                <footer className='hasInput'>
                    <Input addItem={this.props.addItem} />
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

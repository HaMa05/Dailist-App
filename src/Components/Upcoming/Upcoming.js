import React, { Component } from "react";

class Upcoming extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {newItems} = this.props;
        return (
            <div className='Upcoming'>
                <p className='title'>UPCOMING</p>
                <ul className='list'>
                    <li>
                        <span>01.</span>My project
                    </li>
                    <li>
                        <span>01.</span>A
                    </li>
                    <li>
                        <span>01.</span>A
                    </li>
                </ul>
            </div>
        );
    }
}

export default Upcoming;

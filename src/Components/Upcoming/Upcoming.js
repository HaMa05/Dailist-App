import React, { Component } from "react";

class Upcoming extends Component {
    render() {
        // let {title, number, isComplete} = this.props.Upcoming;
        return (
            <div className='Upcoming'>
                <p className='title'>UPCOMING</p>
                <ul className='list'>
                    {this.props.Upcoming && this.props.Upcoming.map((e, index) => (
                        <li key={index} onClick={this.props.isComplete(e)}><span>{e.number}:</span>{e.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Upcoming;

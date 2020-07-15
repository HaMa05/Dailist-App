import React, { Component } from "react";

class Finishing extends Component {
    render() {
        let {Finishing} = this.props;
        return (
            <div className='Finishing'>
                <p className='title'>FINISHING</p>
                <ul className='list'>
                   {Finishing && Finishing.map((e, index) => (
                        <li key={index} className="finish"><span>{e.number}:</span>{e.title}</li>
                    ))} 
                </ul>
            </div>
        );
    }
}

export default Finishing;

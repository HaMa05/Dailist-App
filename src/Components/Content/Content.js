import React, { Component } from 'react';
import Finishing from "../Finishing/Finishing";
import Upcoming from "../Upcoming/Upcoming";

class Content extends Component {
    render() {
        return(
            <div className="Content">
                <Upcoming/>
                <Finishing/>
            </div>
        );
    }
}

export default Content;
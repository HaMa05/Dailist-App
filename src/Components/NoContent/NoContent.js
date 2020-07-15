import React, { Component } from 'react'
import imageNoContent from "../../img/NoteList.svg";

class NoContent extends Component {
    render() {
        return(
            <div className="NoContent">
                <img src={imageNoContent} alt="iconPlus"/>
            </div>
        );
    }
}

export default NoContent;
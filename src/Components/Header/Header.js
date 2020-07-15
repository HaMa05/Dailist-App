import React, { Component } from "react";
import openMenu from "../../img/open-menu.svg"

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <img
                        className='img_menu'
                        src={openMenu}
                        alt="icon"
                    />
                </nav>
                <span className='logo'>DAILIST</span>
            </header>
        );
    }
}

export default Header;

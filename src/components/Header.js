import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";

//components
import routes from "../routes";

class Header extends Component {

    render(){
        return(
            <HashRouter>
                <div className='navBar'>
                    <Link className='links' to='/'>Store</Link>
                    <Link className='links' to='/add'>Add</Link>
                    {routes}
                </div>
            </HashRouter>
        )
    }
}

export default Header;
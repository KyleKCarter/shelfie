import React, {Component} from "react";
import {HashRouter, Link, Route} from "react-router-dom";

//components
import routes from "../routes";
import Update from "./Update";
import Dashboard from "./Dashboard"
import { getInventory } from "./Dashboard";

// const routes = [
//     // {
//     //     path: '/',
//     //     component: Dashboard,
        
//     // },

//     {
//         path: '/edit:id',
//         component: Update,
//         updateProduct: (id) => getInventory(id),
//     }
// ]

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
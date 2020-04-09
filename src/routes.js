import React from "react";
import {Switch, Route} from "react-router-dom";

//components
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Update from "./components/Update";

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={Form} path='/add' />
        <Route component={Update} path='/edit/:id' />
    </Switch>
)
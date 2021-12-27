import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React, { Component } from 'react';
import Watch from "./Watch";
import Filler from "./Filler";
import Header from "./Header";

class Link_DieuHuong extends Component {
    render() {
        return (
            <div>
                <Router>
                <Route exact path="/">
                    <Header></Header>
                </Route>
                <Route exact path="/watch" component={Watch}>
                    <Watch />
                </Route>
                <Route exact path="/Filler"component={Filler}>
                    <Filler />
                </Route>
                </Router>
            </div>
        );
    }
}

export default Link;
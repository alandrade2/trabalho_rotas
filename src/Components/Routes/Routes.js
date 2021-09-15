import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Page0'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/muscular" component={Page1} />
                <Route exact path="/superior" component={Page2} />
                <Route exact path="/cutaneo" component={Page3} />

            </Switch>
        </BrowserRouter>


    );
}


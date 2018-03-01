import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Home, Login } from 'Modules/';

export default () => (
    <Route path="/" component={Home} >
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
    </Route>
);

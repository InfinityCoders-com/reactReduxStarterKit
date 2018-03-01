import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from 'src/modules/home/containers';
import Login from 'src/modules/Login/containers';

export default () => (
    <Route path="/" component={Main} >
        <IndexRoute component={Main} />
        <Route path="login" component={Login} />
        <Route path="/" component={Main} />
    </Route>
);

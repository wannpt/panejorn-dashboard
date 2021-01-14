import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Loadable from 'react-loadable';


const Login = Loadable({
    loader: () => import('../pages/login/Login'),
    loading: () => null
});

const Dashboard = Loadable({
    loader: () => import('../layouts/DashboardLayout'),
    loading: () => null
})

const RootRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/dashboard/'>
                <Dashboard/>
            </Route>
        </Switch>
    )
}

export default RootRoutes;
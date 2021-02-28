import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

const Stat = Loadable({
	loader: () => import('../pages/overall-statistic/Overall-statistic'),
	loading: () => null,
});

const Trends = Loadable({
	loader: () => import('../pages/trends/Trends'),
	loading: () => null,
});

const ModelAnalysis = Loadable({
	loader: () => import('../pages/Model-analysis/Model-Analysis'),
	loading: () => null,
});

const DashboardRoutes = () => {
	return (
		<Switch>
			<Route path='**/stat' component={Stat} />
			<Route path='**/trends' component={Trends} />
			<Route path='**/model' component={ModelAnalysis} />
			
		</Switch>
	);
};

export default DashboardRoutes;

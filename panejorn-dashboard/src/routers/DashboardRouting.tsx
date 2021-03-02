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
			<Route path='**/stat' component={Stat} key='stat' />
			<Route path='**/trends' component={Trends} key='trends' />
			<Route path='**/model' component={ModelAnalysis} key='model' />
		</Switch>
	);
};

export default DashboardRoutes;

import React from 'react';
import Topbar from '../components/topbar/Topbar';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import DashboardRoutes from '../routers/DashboardRouting';
import Menu from '../components/Menu/Menu';

const defaultPadding = {
	paddingLeft: 152,
	paddingRight: 152,
};

const DashboardLayout = () => {
	return (
		<Layout>
			<Header className='gradient-background'>
				<Menu />
				<Topbar />
			</Header>
			<Content className='py-4' style={defaultPadding}>
				<DashboardRoutes />
			</Content>
		</Layout>
	);
};

export default DashboardLayout;

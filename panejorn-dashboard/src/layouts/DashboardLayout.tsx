import React from 'react'
import Topbar from '../components/topbar/Topbar'
import { Layout } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import DashboardRoutes from '../routers/DashboardRouting'
import Sider from 'antd/lib/layout/Sider'
import Menu from '../components/Menu/Menu'

const defaultPaddingLeft = {
    paddingLeft:152,
}

const DashboardLayout = () => {
    return (
        <Layout>
            <Header className='gradient-background'>
                <Menu/>
                <Topbar/>
            </Header>
            <Content className='py-4' style={defaultPaddingLeft}>
                <DashboardRoutes/>
            </Content>    
        </Layout>
    )
}

export default DashboardLayout
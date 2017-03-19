import React from 'react'
import 'antd/dist/antd.css'
import { Layout, Menu,Card, Col, Row } from 'antd';
const { Content, Sider } = Layout;

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1">前端</Menu.Item>
                        <Menu.Item key="6">后端</Menu.Item>
                        <Menu.Item key="7">运维</Menu.Item>
                        <Menu.Item key="8">测试</Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Row style={{ background: '#ECECEC', padding: '30px' }}>
                        <Col span="8">
                            <Card title="Card title" bordered={false}>Sublime Text3</Card>
                        </Col>
                        <Col span="8">
                            <Card title="Card title" bordered={false}>WebStrom</Card>
                        </Col>
                        <Col span="8">
                            <Card title="Card title" bordered={false}>Vim</Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu,Card, Col, Row } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">搜索</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
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
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

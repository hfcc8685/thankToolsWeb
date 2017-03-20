import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Layout, Menu} from 'antd'
import Detail from './detail'
import Home from './home'
import 'antd/dist/antd.css'

const history = createBrowserHistory()
const { Header, Content, Footer } = Layout
const App = () => (
    <Router history={history}>
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Route exact path="/" component={Home}/>
                <Route path="/detail" component={Detail}/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ThankFamily ©2017 Created by hfcc
            </Footer>
        </Layout>
    </Router>
)

ReactDOM.render((<App/>), document.getElementById('root'));

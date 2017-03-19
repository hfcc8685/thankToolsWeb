import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Router } from 'react-router'
import {Link,Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Layout, Menu} from 'antd';
const history = createBrowserHistory();
const { Header, Content, Footer } = Layout;
export default class App extends React.Component{
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
                        <Menu.Item key="1">
                            <Link to="/home">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    ThankFamily ©2017 Created by hfcc
                </Footer>
            </Layout>
        )
    }
}

ReactDOM.render((
    <Router history={history}>
        <Route path='/' component={App}/>
    </Router>
    ), document.getElementById('root'));

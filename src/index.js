import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css'
import Detail from './detail'
import Share from './share'
import Home from './home'
const history = createBrowserHistory();
const { Header, Content, Footer } = Layout;
export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Router history={history}>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">
                                <Link to="/">随便看看</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/share">分享一个 tool</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/share" component={Share}/>
                        <Route path="/detail" component={Detail}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        ThankFamily ©2017 Created by hfcc
                    </Footer>
                </Layout>
            </Router>
        )
    }
}
ReactDOM.render((<App/>), document.getElementById('root'));

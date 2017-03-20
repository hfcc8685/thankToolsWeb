import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Layout, Button} from 'antd'
import Detail from './detail'
import Home from './home'
import 'antd/dist/antd.css'
import './css/index.css'

const history = createBrowserHistory()
const { Content, Footer } = Layout
const App = () => (
    <Router history={history}>
        <Layout>
            <div className="padding-all-20">
                <Link to="/">
                    <Button shape="circle" size="large" icon="home" />
                </Link>
            </div>
            <Content className="padding-left-right-20">
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

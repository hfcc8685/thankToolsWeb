import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu,Card, Col, Row,Collapse,Badge,Icon } from 'antd';
const { Header, Content, Footer } = Layout;
const Panel = Collapse.Panel;


class PanelHeader extends React.Component{
    constructor(props){
        super(props)
    }
    likeClick(event){
        if (event.stopPropagation){
            event.stopPropagation();
        }
        else if(window.event){
            window.event.cancelBubble=true;
        }
        //TODO like servlet
    }
    render () {

        return (
            <div>
                <span>
                    <span>安装步骤</span>
                    <span style={{float:'right',paddingRight:20}}>
                        <Badge count={1000} overflowCount={999}>
                            <a href="#" className="head-example" />
                        </Badge>
                    </span>
                    <span style={{float:'right',paddingRight:30}} onClick={e=>this.likeClick(e)}>
                        <Icon type="like" />
                    </span>

                </span>
            </div>
        )
    }
}

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
                        <Menu.Item key="2">分享一个 tool</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Row>
                        <Col span="6">
                            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                            </Card>
                        </Col>
                        <Col span="6">
                        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            </div>
                        </Card>
                        </Col>
                        <Col span="6">
                            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                        <div style={{paddingTop:20,paddingBottom:20}}>
                            Vim是一个类似于Vi的文本编辑器，不过在Vi的基础上增加了很多新的特性，Vim普遍被推崇为类Vi编辑器中最好的一个，事实上真正的劲敌来自Emacs的不同变体。1999年Emacs被选为Linuxworld文本编辑分类的优胜者，Vim屈居第二。但在2000年2月Vim赢得了Slashdot Beanie的最佳开放源代码文本编辑器大奖，又将Emacs推至二线， 总的来看， Vim和Emacs同样都是非常优秀的文本编辑器。Vim(和Vi)一个最大的优势
                            在于它最常用的命令都是简单的字符，这比起使用复杂的控制组合键要快得多，而且也解放了手指的大量工作，学习使用这些命令的时间很快。
                        </div>
                        <Collapse bordered={false} defaultActiveKey={['1','2','3']}>
                            <Panel header={<PanelHeader/>} key="1">
                                <p>暗室逢灯尽量发进来就拉上解放啦</p>
                            </Panel>
                            <Panel header="踩过的坑" key="2">
                                <p>发生纠纷拉法基辣椒粉垃圾分类</p>
                            </Panel>
                            <Panel header="快捷键" key="3">
                                <p>文件法拉盛放假啦是经理发</p>
                            </Panel>
                        </Collapse>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

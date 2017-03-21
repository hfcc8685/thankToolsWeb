import React from 'react'
import {Tag, Col, Row, Collapse} from 'antd'
import Title from './component/title'
const Panel = Collapse.Panel;
const Detail = () =>(
    <div>
        <Row>
            <Col>
                <div style={{paddingTop:20,paddingBottom:20}}>
                    Vim是一个类似于Vi的文本编辑器，不过在Vi的基础上增加了很多新的特性，Vim普遍被推崇为类Vi编辑器中最好的一个，事实上真正的劲敌来自Emacs的不同变体。1999年Emacs被选为Linuxworld文本编辑分类的优胜者，Vim屈居第二。但在2000年2月Vim赢得了Slashdot Beanie的最佳开放源代码文本编辑器大奖，又将Emacs推至二线， 总的来看， Vim和Emacs同样都是非常优秀的文本编辑器。Vim(和Vi)一个最大的优势
                    在于它最常用的命令都是简单的字符，这比起使用复杂的控制组合键要快得多，而且也解放了手指的大量工作，学习使用这些命令的时间很快。
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Tag>nihao</Tag><Tag>nihao</Tag><Tag>nihao</Tag><Tag>nihao</Tag><Tag>nihao</Tag>
            </Col>
        </Row>
        <Row className="margin-top-20">
            <Col>
                <Collapse bordered={false} defaultActiveKey={['1','2','3']}>
                    <Panel header={<Title title="安装方式"/>} key="1">
                        <p>暗室逢灯尽量发进来就拉上解放啦</p>
                    </Panel>
                    <Panel header="踩过的坑" key="2">
                        <p>发生纠纷拉法基辣椒粉垃圾分类</p>
                    </Panel>
                    <Panel header="快捷键" key="3">
                        <p>文件法拉盛放假啦是经理发</p>
                    </Panel>
                </Collapse>
            </Col>
        </Row>
    </div>
);
export default Detail;

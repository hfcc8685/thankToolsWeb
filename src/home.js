import React from 'react'
import 'antd/dist/antd.css'
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row gutter={20}>
                <Col span="4">
                    <Link to="/detail">
                        <Card title="Card title" bordered={false}>
                            Vim
                        </Card>
                    </Link>
                </Col>
                <Col span="4">
                    <Link to="/detail">
                        <Card title="Card title" bordered={false}>
                            Vim
                        </Card>
                    </Link>
                </Col>
                <Col span="4">
                    <Link to="/detail">
                        <Card title="Card title" bordered={false}>
                            Vim
                        </Card>
                    </Link>
                </Col>
                <Col span="4">
                    <Link to="/detail">
                        <Card title="Card title" bordered={false}>
                            Vim
                        </Card>
                    </Link>
                </Col>
                <Col span="4">
                    <Link to="/detail">
                        <Card title="Card title" bordered={false}>
                            Vim
                        </Card>
                    </Link>
                </Col>
                <Col span="4">
                    <Link to="/detail">
                        <Card title="Card title" bordered={false}>
                            Vim
                        </Card>
                    </Link>
                </Col>

            </Row>
        )
    }
}

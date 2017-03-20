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
            <Row style={{ background: '#ECECEC', padding: '30px' }}>
                <Link to="/detail">
                    <Col span="8">
                        <Card title="Card title" bordered={false}>
                            Vim
                        </Card>
                    </Col>
                </Link>
                <Col span="8">
                    <Card title="Card title" bordered={false}>WebStrom</Card>
                </Col>
                <Col span="8">
                    <Card title="Card title" bordered={false}>Vim</Card>
                </Col>
            </Row>
        )
    }
}

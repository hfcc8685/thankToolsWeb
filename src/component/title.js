import React from 'react'
import {Badge,Icon } from 'antd'
export default class Title extends React.Component{
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
                    <span>{this.props.title}</span>
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

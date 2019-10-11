import React, { Component } from 'react'
import {Table,InputNumber} from 'antd'
const {Column} = Table

export default class ShopCart extends Component {
    render() {
        return (
            <div>
                <Table >
                    <Column title="名字" dataIndex="name" key="name"></Column>
                    <Column title="图片" dataIndex="url" key="url" render={
                        url=>(
                            <img src={url} style={{width:100,height:80}}/>
                        )
                    }></Column>
                    <Column title="数量" dataIndex="num" key="num" render={
                        num=>(
                            <InputNumber min={0}  defaultValue={num}/>
                        )
                    }></Column>
                    <Column title="单价" dataIndex="price" key="price"></Column>
                    <Column title="总价" render={
                        record=>(
                            <span>{record.num*record.price}</span>
                        )
                    }></Column>
                    <Column title="操作" render={
                        ()=>(
                            <Button type="danger">删除</Button>
                        )
                    }></Column>
                </Table>
            </div>
        )
    }
}

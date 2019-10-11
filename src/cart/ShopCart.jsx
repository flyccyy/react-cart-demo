import React, { Component } from "react";
import { Table, InputNumber, Button, Modal } from "antd";
import { connect } from "react-redux";
import { updateGoods, deleteGoodsAsync } from "./store/actionCreator";
const { Column } = Table;
const { confirm } = Modal;

class ShopCart extends Component {
  constructor(props) {
    super();
    let initList = props.list;
    initList.forEach(item => {
      item.key = item.id;
    });
    this.state = {
      goodslist: props.list
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      goodslist: nextProps.list
    });
  }
  //删除商品事件
  deleteList = id => {
    confirm({
      title: "注意",
      content: "确认要删除吗？",
      okText: "删除",
      okType: "danger",
      cancelText: "取消",
      onOk: () => {
        this.props.delete(id);
      },
      onCancel() {}
    });
  };
  render() {
    const { goodslist } = this.state;
    return (
      <div>
        <Table dataSource={goodslist} pagination={false}>
          <Column title="名字" dataIndex="name" key="name"></Column>
          <Column
            title="图片"
            dataIndex="url"
            key="url"
            render={url => (
              <img src={url} style={{ width: 100, height: 80 }} alt="" />
            )}
          ></Column>
          <Column
            title="数量"
            render={record => (
              <InputNumber
                min={0}
                defaultValue={record.num}
                onChange={value => {
                  this.props.update(value, record.id);
                }}
              />
            )}
          ></Column>
          <Column title="单价" dataIndex="price" key="price"></Column>
          <Column
            title="总价"
            render={record => <span>{record.num * record.price}</span>}
          ></Column>
          <Column
            title="操作"
            render={record => (
              <Button type="danger" onClick={() => this.deleteList(record.id)}>
                删除
              </Button>
            )}
          ></Column>
        </Table>
      </div>
    );
  }
}
export default connect(
  state => {
    return {
      list: state
    };
  },
  dispatch => {
    return {
      //更改商品数
      update: (num, id) => {
        dispatch(updateGoods({ num, id }));
      },
      //删除商品
      delete: id => {
        dispatch(deleteGoodsAsync(id));
      }
    };
  }
)(ShopCart);

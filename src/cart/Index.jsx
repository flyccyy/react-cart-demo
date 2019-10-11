import React, { Component } from "react";
import styles from "./Index.module.css";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import GoodsList from "./GoodsList";
import ShopCart from "./ShopCart";
import { connect } from "react-redux";

class Index extends Component {
  constructor(props) {
    super();
    let total = 0;
    props.goodslist.forEach(item => {
      total += item.num;
    });
    this.state = {
      count: total
    };
  }
  componentWillReceiveProps(nextProps) {
    let total = 0;
    nextProps.goodslist.forEach(item => {
      total += item.num;
    });
    this.setState({
      count: total
    });
  }
  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      window.localStorage.setItem(
        "goodslist",
        JSON.stringify(this.props.goodslist)
      );
    });
  }
  render() {
    return (
      <Router>
        <div>
          <h2 className={styles.title}>
            购物商场-简易版
            <p>
              <Link to="/goodslist">商品列表</Link>&nbsp;&nbsp;
              <Link to="/shopcart">
                购物车
                {this.state.count > 0 && <span>({this.state.count})</span>}
              </Link>
            </p>
          </h2>
          <Switch>
            <Route path="/goodslist" component={GoodsList}></Route>
            <Route path="/shopcart" component={ShopCart}></Route>
            <Redirect exact from="/" to="/goodslist"></Redirect>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default connect(
  state => {
    return {
      goodslist: state
    };
  },
  null
)(Index);

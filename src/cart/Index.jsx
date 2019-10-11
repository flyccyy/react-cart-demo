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

export default class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2 className={styles.title}>
            购物商场-简易版
            <p>
              <Link to="/goodslist">商品列表</Link>
              <Link to="/shopcart">购物车</Link>
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

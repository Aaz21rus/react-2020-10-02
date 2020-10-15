import React from 'react';
import { connect } from 'react-redux';
import styles from './basket.module.css';
import Product from '../product';

const Basket = (menu) => (
  <div className={styles.white}>
    {/*{menu.map((product) => (*/}
    {/*    <Product key={product.id} product={product} />*/}
    {/*))}*/}
    {/*<Product key={menu.id} product={menu}/>*/}
  </div>
);

const stateProductInBasket = (state, ownProps) => ({
  menu: state.order[ownProps.product.id] || 0,
});

export default connect()(Basket);

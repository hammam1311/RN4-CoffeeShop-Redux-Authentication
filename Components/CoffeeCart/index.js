import React, { Component } from "react";
import { Text, List, Button } from "native-base";
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";

import { checkoutCart } from "../../redux/actions";

const CoffeeCart = ({ cart, checkoutCart, navigation }) => {
  const cartItems = cart.map(item => (
    <CartItem item={item} key={item.drink + item.option} />
  ));

  return (
    <List>
      {cartItems.length ? (
        <>
          {cartItems}
          <Button full danger onPress={checkoutCart}>
            <Text>Checkout</Text>
          </Button>
        </>
      ) : (
        <Text style={{ textAlign: "center" }}>Buy something</Text>
      )}
    </List>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  checkoutCart: () => dispatch(checkoutCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);

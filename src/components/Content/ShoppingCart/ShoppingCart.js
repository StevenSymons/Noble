import React from "react";
import styled from "styled-components";
import Items from "./Items";
import TotalPrice from "./TotalPrice";
import PaymentDetails from "./PaymentDetails";
import { connect } from "react-redux";

const ShoppingCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  background-color: rgba(41, 41, 41, 0.1);
  width: 100%;
  box-sizing: border-box;
  padding: 3rem 0;
`;

const LeftPart = styled.div`
  height: 100%;
`;

const ShoppingCart = ({ shoppingCart }) => {
  return (
    <ShoppingCartWrapper>
      <LeftPart>
        <Items shoppingCart={shoppingCart} />
        <PaymentDetails />
      </LeftPart>
      <TotalPrice shoppingCart={shoppingCart} />
    </ShoppingCartWrapper>
  );
};

const mapStateToProps = ({ shoppingCart }) => {
  return {
    shoppingCart
  };
};

export default connect(mapStateToProps)(ShoppingCart);

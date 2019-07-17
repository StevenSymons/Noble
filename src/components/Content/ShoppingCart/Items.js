import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ItemsWrapper = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  min-height: 300px;
  height: 78%;
  width: 730px;
  background-color: white;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Items = ({ shoppingCart }) => {
  console.log(shoppingCart);
  return (
    <ItemsWrapper>
      <Title>
        Winkelwagen{" "}
        {shoppingCart.length > 0 && "(" + shoppingCart.length + " items)"}
      </Title>
      {shoppingCart.map(item => {
        console.log(item);
        return <Item item={item} />;
      })}
    </ItemsWrapper>
  );
};

export default Items;

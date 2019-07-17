import React from "react";
import styled from "styled-components";
import { CTA } from "../ProductDetails/ProductDetails";

const TotalPriceWrapper = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  margin-left: 3rem;
  height: 350px;
  width: 350px;
  background-color: white;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const PriceInfo = styled.div`
  margin-top: 4rem;
`;

const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const Total = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
`;

const TotalPrice = ({ shoppingCart }) => {
  // const [totalPrice, setTotalPrice] = useState();

  const calcTotal = () => {
    let totalPrice = 0;
    shoppingCart.forEach(item => {
      totalPrice += item.price * item.count;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <TotalPriceWrapper>
      <Title>Totaalprijs</Title>
      <PriceInfo>
        <SubTotal>
          <span>Subtotaal</span>
          <span>{calcTotal()} €</span>
        </SubTotal>
        <SubTotal>
          <span>Verzending</span>
          <span>Gratis</span>
        </SubTotal>
        <hr />
        <Total>
          <span>
            <strong>Totaalprijs (inclusief BTW)</strong>
          </span>
          <span>
            <strong>{calcTotal()} €</strong>
          </span>
        </Total>
        <CTA>VERDER NAAR BESTELLEN</CTA>
      </PriceInfo>
    </TotalPriceWrapper>
  );
};

export default TotalPrice;

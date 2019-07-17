import React from "react";
import styled from "styled-components";
import visa from "../../../assets/icons/visa.svg";
import paypal from "../../../assets/icons/paypal.svg";
import maestro from "../../../assets/icons/maestro.svg";
import wireTransfer from "../../../assets/icons/wire-transfer.svg";

const Title = styled.h2`
  margin-top: 0;
`;

const PaymentDetailsWrapper = styled.div`
  margin-top: 1.5rem;
  box-sizing: border-box;
  padding: 3rem;
  height: 180px;
  width: 730px;
  background-color: white;
`;

const Image = styled.img`
  width: 34px;
  margin-top: 2rem;
  margin-right: 3rem;
`;

const PaymentDetails = () => (
  <PaymentDetailsWrapper>
    <Title>We aanvaarden</Title>
    <Image src={visa} />
    <Image src={paypal} />
    <Image src={maestro} />
    <Image src={wireTransfer} />
  </PaymentDetailsWrapper>
);

export default PaymentDetails;

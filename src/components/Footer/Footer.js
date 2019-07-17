import React from "react";
import styled from "styled-components";
import { Logo } from "../Navbar/Logo";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 150px;
  width: 100%;
  background-color: #292929;
`;

export const Footer = () => (
  <FooterWrapper>
    <Logo />
  </FooterWrapper>
);

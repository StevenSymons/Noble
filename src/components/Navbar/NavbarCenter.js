import React from "react";
import { Logo } from "./Logo";
import styled from "styled-components";

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NavbarCenter = () => (
  <LogoWrapper>
    <Logo />
  </LogoWrapper>
);

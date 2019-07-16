import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 4.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #292929;
`;

export const Logo = () => (
  <LogoTitle>
    <StyledLink to="/">Noble</StyledLink>
  </LogoTitle>
);

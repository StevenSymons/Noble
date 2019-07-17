import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarLeftWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-30%);
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  color: #292929;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 0;
  padding-bottom: 3px;
  margin-right: 20%;
  transition: border-bottom 0.2s linear;

  &:hover {
    border-bottom: 2px solid #292929;
  }
  &.active {
    border-bottom: 2px solid #292929;
  }
`;

export const NavbarLeft = () => (
  <NavbarLeftWrapper>
    <StyledNavLink to="/dames">dames</StyledNavLink>
    <StyledNavLink to="/heren">heren</StyledNavLink>
    <StyledNavLink to="/kinderen">kinderen</StyledNavLink>
  </NavbarLeftWrapper>
);

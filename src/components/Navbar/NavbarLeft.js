import React from "react";
import styled from "styled-components";

const NavbarLeftWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-30%);
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  font-size: 1.8rem;
  font-weight: 100;
  padding: 0;
  padding-bottom: 3px;
  margin-right: 20%;

  &:hover {
    border-bottom: 2px solid #292929;
  }
`;

export const NavbarLeft = () => (
  <NavbarLeftWrapper>
    <Button>dames</Button>
    <Button>heren</Button>
    <Button>kinderen</Button>
  </NavbarLeftWrapper>
);

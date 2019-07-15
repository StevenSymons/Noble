import React from "react";
import styled from "styled-components";
import { NavbarLeft } from "./Navbar/NavbarLeft";
import { NavbarRight } from "./Navbar/NavbarRight";
import { NavbarCenter } from "./Navbar/NavbarCenter";

const NavbarWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 70px;
`;

export const Navbar = () => (
  <NavbarWrapper>
    <NavbarLeft />
    <NavbarCenter />
    <NavbarRight />
  </NavbarWrapper>
);

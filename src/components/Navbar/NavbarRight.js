import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import accountIcon from "../../assets/icons/account.svg";
import heartIcon from "../../assets/icons/heart.svg";
import shoppingCartIcon from "../../assets/icons/shopping-cart.svg";

const NavbarRightWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavbarMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.5rem;
  cursor: pointer;

  &:hover > span {
    font-weight: 700;
  }
`;

const Text = styled.span`
  display: flex;
  justify-content: center;
  width: 70px;
  font-size: 1rem;
  transition: font-weight 0.2s linear;
`;

const Image = styled.img`
  width: 32px;
  padding-bottom: 0.7rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #292929;
`;

export const NavbarRight = () => (
  <NavbarRightWrapper>
    <NavbarMenu>
      <NavbarMenuItem>
        <Image src={accountIcon} />
        <Text>mijn account</Text>
      </NavbarMenuItem>
      <StyledLink to="/wish-list">
        <NavbarMenuItem>
          <Image src={heartIcon} />
          <Text>verlanglijstje</Text>
        </NavbarMenuItem>
      </StyledLink>
      <StyledLink to="/shopping-cart">
        <NavbarMenuItem>
          <Image src={shoppingCartIcon} />
          <Text>winkelwagen</Text>
        </NavbarMenuItem>
      </StyledLink>
    </NavbarMenu>
  </NavbarRightWrapper>
);

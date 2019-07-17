import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeartButton } from "./HeartButton";
import { connect } from "react-redux";
import { add } from "../../../actions/wishListActions";

const ProductListWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover > a > div > div {
    visibility: visible;
    height: 50px;
    max-height: 50px;
  }
`;

const Image = styled.img`
  width: 275px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 275px;
  margin-bottom: 0.5rem;
`;

const Description = styled.span`
  font-weight: 300;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ExtraInfo = styled.div`
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 0;
  max-height: 0px;
  transition: max-height 0.2s linear;
  width: 275px;
  background-color: rgba(255, 255, 255, 0.8);
  bottom: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #292929;
`;

const ProductListItem = ({
  id,
  brand,
  price,
  desc,
  link,
  path,
  dispatch,
  icon,
  addOrRemove,
  index
}) => {
  const item = { id, brand, price, desc, link, path };
  const newTo = {
    pathname: path + "/" + id,
    state: {
      index
    }
  };

  return (
    <ProductListWrapper>
      <StyledLink to={newTo}>
        <ImageWrapper>
          <Image src={link} />
          <ExtraInfo>
            <span>In stock</span>
          </ExtraInfo>
        </ImageWrapper>
        <TextWrapper>
          <span>
            <strong>{brand}</strong>
          </span>
          <span>{price + " €"}</span>
        </TextWrapper>
        <Description>{desc}</Description>
      </StyledLink>
      <HeartButton addOrRemove={() => addOrRemove(item)} icon={icon} />
    </ProductListWrapper>
  );
};

export default connect()(ProductListItem);

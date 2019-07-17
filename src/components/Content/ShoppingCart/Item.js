import React from "react";
import styled from "styled-components";
import { Filter } from "../Catalog/CatalogFilters";
import thrashCan from "../../../assets/icons/thrash-can.svg";
import heartIcon from "../../../assets/icons/heart.svg";
import { connect } from "react-redux";
import { add } from "../../../actions/wishListActions";
import { removeFromCart } from "../../../actions/shoppingCartActions";

const ItemWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
`;

const Image = styled.img`
  width: 70px;
  margin-right: 3rem;
`;

const Text = styled.span`
  display: block;
  color: rgba(41, 41, 41, 0.75);
`;

const ItemOptions = styled.span`
  font-size: 1.2rem;
  color: rgba(41, 41, 41, 0.7);
  margin-right: 3.5rem;
  cursor: pointer;
`;

const TextDivision = styled.div`
  margin-bottom: 0.8rem;
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledFilter = styled(Filter)`
  align-self: flex-end;
  margin-right: 0;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Icon = styled.img`
  width: 10px;
  margin-right: 0.6rem;
`;

const Item = ({
  item: { id, brand, desc, color, price, count, link },
  dispatch
}) => {
  const addToWishList = () => {
    const product = { brand, color, count, desc, id, link, price };
    dispatch(add(product));
  };

  const removeFromShoppingCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <ItemWrapper>
      <Image src={link} />
      <div>
        <TextDivision>
          <span>{brand}</span>
          <Text>{desc}</Text>
        </TextDivision>
        <TextDivision>
          <Text>Kleur: {color}</Text>
          <Text>Maat: S</Text>
        </TextDivision>
        <ItemOptions onClick={removeFromShoppingCart}>
          <span>
            <Icon src={thrashCan} />
          </span>
          verwijder artikel
        </ItemOptions>
        <ItemOptions onClick={addToWishList}>
          <span>
            <Icon src={heartIcon} />
          </span>
          zet op verlanglijstje
        </ItemOptions>
      </div>
      <RightPart>
        <StyledFilter>1</StyledFilter>
        <Price>{price * count} €</Price>
      </RightPart>
    </ItemWrapper>
  );
};

export default connect()(Item);

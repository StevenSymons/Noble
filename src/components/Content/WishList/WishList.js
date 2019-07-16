import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ProductListItem from "../Catalog/ProductListItem";
import removeIcon from "../../../assets/icons/remove.svg";
import { remove } from "../../../actions/wishListActions";

const WishListWrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
`;

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const WishList = ({ wishList, dispatch }) => {
  const addOrRemove = item => {
    dispatch(remove(item.id));
  };

  return (
    <WishListWrapper>
      <Title>Jouw verlanglijst</Title>
      <ProductListWrapper>
        {wishList.map(({ id, brand, price, desc, link, path }) => {
          console.log(wishList);
          return (
            <ProductListItem
              id={id}
              brand={brand}
              price={price}
              desc={desc}
              link={link}
              path={path}
              icon={removeIcon}
              addOrRemove={addOrRemove}
            />
          );
        })}
      </ProductListWrapper>
    </WishListWrapper>
  );
};

const mapStateToProps = ({ wishList }) => {
  return {
    wishList
  };
};

export default connect(mapStateToProps)(WishList);

import React from "react";
import { withRouter } from "react-router-dom";
import ProductListItem from "./ProductListItem";
import styled from "styled-components";
import { data } from "../../../shared/data";
import heartIcon from "../../../assets/icons/heart.svg";
import { connect } from "react-redux";
import { add } from "../../../actions/wishListActions";

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  width: 100%;
`;

const ProductList = ({ location: { pathname }, dispatch }) => {
  const addOrRemove = item => {
    dispatch(add(item));
  };

  return (
    <ProductListWrapper>
      {data.map(({ id, brand, price, desc, link }) => (
        <ProductListItem
          id={id}
          brand={brand}
          price={price}
          desc={desc}
          link={link}
          path={pathname}
          icon={heartIcon}
          addOrRemove={addOrRemove}
        />
      ))}
    </ProductListWrapper>
  );
};

export default connect()(withRouter(ProductList));

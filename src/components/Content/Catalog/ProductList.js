import React from "react";
import { ProductListItem } from "./ProductListItem";
import styled from "styled-components";
import { data } from "./data";

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  width: 100%;
`;

export const ProductList = () => (
  <ProductListWrapper>
    {data.map(({ brand, price, desc, link }) => (
      <ProductListItem brand={brand} price={price} desc={desc} link={link} />
    ))}
  </ProductListWrapper>
);

import React from "react";
import { CatalogTitle } from "./CatalogTitle";
import { CatalogFilters } from "./CatalogFilters";
import { ProductList } from "./ProductList";
import styled from "styled-components";

const CatalogWrapper = styled.div`
  width: 100%;
`;

export const Catalog = () => (
  <CatalogWrapper>
    <CatalogTitle />
    <CatalogFilters />
    <ProductList />
  </CatalogWrapper>
);

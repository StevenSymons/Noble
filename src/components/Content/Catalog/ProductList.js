import React, { useState, useEffect } from "react";
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

const ProductList = ({ location: { pathname }, match, dispatch, filters }) => {
  const [filteredElements, setFilteredElements] = useState([]);
  const [index, setIndex] = useState();

  const addOrRemove = item => {
    dispatch(add(item));
  };

  useEffect(() => {
    console.log(filters);
    if (match.path.slice(1) === "dames") {
      setIndex(0);
      return setFilteredElements(data[0]);
    } else if (match.path.slice(1) === "heren") {
      setIndex(1);
      return setFilteredElements(data[1]);
    } else {
      setIndex(2);
      return setFilteredElements(data[2]);
    }
  });

  console.log(filteredElements);
  console.log(filters);
  return (
    <ProductListWrapper>
      {filteredElements
        .filter(element => {
          const newArray = Object.values(element);
          if (filters.every(item => newArray.includes(item))) {
            return element;
          }
        })
        .map(({ id, brand, price, desc, link }) => (
          <ProductListItem
            id={id}
            brand={brand}
            price={price}
            desc={desc}
            link={link}
            path={pathname}
            icon={heartIcon}
            addOrRemove={addOrRemove}
            index={index}
          />
        ))}
    </ProductListWrapper>
  );
};

const mapStateToProps = ({ filters }) => {
  return {
    filters
  };
};

export default connect(mapStateToProps)(withRouter(ProductList));

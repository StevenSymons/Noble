import React, { useState, useEffect } from "react";
import { data } from "../../../shared/data";
import styled from "styled-components";
import { Filter } from "../Catalog/CatalogFilters";
import heartIcon from "../../../assets/icons/heart.svg";
import { connect } from "react-redux";
import { add } from "../../../actions/wishListActions";
import { addToCart } from "../../../actions/shoppingCartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const PicWrapper = styled.img`
  flex-grow: 1;
  margin-top: 70px;
  margin-right: 70px;
  margin-left: 170px;
  margin-bottom: 70px;
  width: 470px;
`;

const ProductInfo = styled.div`
  box-sizing: border-box;
  margin-top: 70px;
  width: 100%;
  padding-top: 50px;
  font-size: 1.8rem;
`;

const Description = styled.h3`
  margin-bottom: 4.5rem;
`;

const Price = styled.span`
  font-weight: bold;
`;

const BTW = styled.span`
  font-size: 1.2rem;
  color: rgba(41, 41, 41, 0.4);
  padding-left: 1rem;
`;

const StyledFilter = styled(Filter)`
  margin-top: 6.5rem;
  margin-bottom: 4rem;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin: 1rem 0;
  text-transform: uppercase;
  background-color: white;
  border: 1px solid rgba(41, 41, 41, 0.4);
  border-radius: 2px;
  padding: 0.8rem;
  width: 280px;
  cursor: pointer;
  outline: none;
`;

export const CTA = styled.button`
  display: block;
  font-size: 1.4rem;
  color: white;
  border: none;
  margin: 1rem 0;
  padding: 1.5rem;
  text-transform: uppercase;
  background-color: #292929;
  font-weight: bold;
  width: 280px;
  cursor: pointer;
  outline: none;
`;

const Delivery = styled.div`
  margin-top: 3.5rem;
  font-size: 1.4rem;
`;

const Standard = styled.div`
  display: inline-block;
  margin-right: 4rem;
  width: 160px;
`;

const Image = styled.img`
  height: 29px;
  padding-right: 1rem;
`;

const ProductDetails = ({ match: { params }, dispatch, location }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productData = data[location.state.index].filter(product => {
      return product.id === parseInt(params.id);
    });
    setProduct(productData);
  }, []);

  const addToWishList = product => {
    dispatch(add(product));
  };

  const addToShoppingCart = product => {
    product.count = 1;
    dispatch(addToCart(product));
  };

  return (
    <ProductDetailsWrapper>
      <div>
        <PicWrapper src={product[0] && product[0].link} />
      </div>
      <ProductInfo>
        <h4>{product[0] && product[0].brand}</h4>
        <Description>{product[0] && product[0].desc}</Description>
        <Price>{product[0] && product[0].price + " €"}</Price>
        <BTW>inclusief BTW</BTW>
        <StyledFilter>Maat</StyledFilter>
        <LikeButton onClick={() => addToWishList(product[0])}>
          <span>
            <Image src={heartIcon} />
          </span>
          plaats op verlanglijstje
        </LikeButton>
        <CTA onClick={() => addToShoppingCart(product[0])}>bestel nu!</CTA>
        <Delivery>
          <Standard>
            <strong>Standaard levering</strong> gratis 2-5 werkdagen
          </Standard>
          <Standard>
            <strong>Express</strong> € 9,95 Levering beschikbaar
          </Standard>
        </Delivery>
      </ProductInfo>
    </ProductDetailsWrapper>
  );
};

export default connect()(ProductDetails);

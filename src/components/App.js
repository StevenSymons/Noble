import React from "react";
import { Navbar } from "./Navbar";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";
import ProductDetails from "./Content/ProductDetails/ProductDetails";
import WishList from "./Content/WishList/WishList";
import ShoppingCart from "./Content/ShoppingCart/ShoppingCart";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const AppWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 150px;
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <ContentWrapper>
          <Navbar />
          <Switch>
            <Route exact path="/dames" component={Content} />
            <Route exact path="/heren" component={Content} />
            <Route exact path="/kinderen" component={Content} />
            <Route path="/dames/:id" component={ProductDetails} />
            <Route path="/heren/:id" component={ProductDetails} />
            <Route path="/kinderen/:id" component={ProductDetails} />
            <Route path="/wish-list" component={WishList} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Redirect exact from="/" to="/dames" />
          </Switch>
          <Footer />
        </ContentWrapper>
      </AppWrapper>
    </Router>
  );
};

export default App;

import React from "react";
import { Navbar } from "./Navbar";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";
import ProductDetails from "./Content/ProductDetails/ProductDetails";
import WishList from "./Content/WishList/WishList";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Navbar />
        <Switch>
          <Route exact path="/dames" component={Content} />
          <Route path="/dames/:id" component={ProductDetails} />
          <Route path="/wish-list" component={WishList} />
          <Redirect exact from="/" to="/dames" />
        </Switch>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;

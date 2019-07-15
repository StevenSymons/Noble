import React from "react";
import { Navbar } from "./Navbar";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Content />
      <Footer />
    </AppWrapper>
  );
};

export default App;

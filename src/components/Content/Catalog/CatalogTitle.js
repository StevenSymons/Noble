import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 4rem;
`;

const CatalogTitle = ({ location: { pathname } }) => {
  return (
    <Title>
      Kleding{" "}
      {pathname
        .slice(1)
        .charAt(0)
        .toUpperCase() + pathname.slice(2)}
    </Title>
  );
};

export default withRouter(CatalogTitle);

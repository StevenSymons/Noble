import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Catalog } from "./Catalog/Catalog";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  width: 90%;
  height: 100%;
`;

export const Content = () => (
  <ContentWrapper>
    <Sidebar />
    <Catalog />
  </ContentWrapper>
);

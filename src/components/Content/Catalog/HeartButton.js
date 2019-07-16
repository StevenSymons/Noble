import React from "react";
import styled from "styled-components";

const HeartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  width: 34px;
  height: 34px;
  background-color: white;
  border-radius: 100px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    color: red;
    fill: red;
  }
`;

const Image = styled.img`
  width: 2.2rem;
`;

export const HeartButton = ({ addOrRemove, icon }) => {
  return (
    <HeartButtonWrapper onClick={addOrRemove}>
      <Image src={icon} />
    </HeartButtonWrapper>
  );
};

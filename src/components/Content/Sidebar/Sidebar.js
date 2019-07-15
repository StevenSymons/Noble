import React, { useState } from "react";
import styled from "styled-components";
import arrowIcon from "../../../assets/icons/arrow.svg";
import { elements } from "./data";

const SidebarWrapper = styled.div`
  width: 200px;
  padding-right: 1rem;
`;

const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
`;

const SidebarListItem = styled.li`
  font-size: 1.8rem;
  font-weight: ${props => (props.open ? "bold" : "normal")};
  transition: font-weight 0.1s linear;
  padding: 0.5rem 0;
  width: 100%;
  min-width: 150px;
  cursor: pointer;

  &:hover,
  &:focus {
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 1rem;
  transform: ${props => (props.open ? "rotate(90deg)" : "none")};
  transition: all 0.1s linear;
`;

const SidebarSubList = styled.ul`
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  list-style: none;
  padding: 0;
  margin-left: 2.2rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.1s linear;
`;

const SidebarSubListItem = styled.li`
  margin: 1rem 0;
`;

export const Sidebar = () => {
  const [showSubList, setShowSubList] = useState([]);

  const showMenu = category => {
    if (showSubList.includes(category)) {
      const filteredList = showSubList.filter(
        listItem => listItem !== category
      );
      return setShowSubList(filteredList);
    }
    setShowSubList(() => [...showSubList, category]);
  };

  return (
    <SidebarWrapper>
      <SidebarList>
        {elements.map(({ category, subcategories }) => (
          <div>
            <SidebarListItem
              onClick={() => showMenu(category)}
              open={showSubList.includes(category)}
            >
              {category}{" "}
              <span>
                <Image src={arrowIcon} open={showSubList.includes(category)} />
              </span>
            </SidebarListItem>

            <SidebarSubList open={showSubList.includes(category)}>
              {subcategories.map(subcategory => (
                <SidebarSubListItem>{subcategory}</SidebarSubListItem>
              ))}
            </SidebarSubList>
          </div>
        ))}
      </SidebarList>
    </SidebarWrapper>
  );
};

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrowIcon from "../../../assets/icons/arrow.svg";
import { elements } from "./data";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addBaseFilter } from "../../../actions/filterActions";

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

const Sidebar = props => {
  const [showSubList, setShowSubList] = useState([]);
  const [filteredElements, setFilteredElements] = useState([]);

  useEffect(() => {
    if (props.match.path.slice(1) === "dames") {
      return setFilteredElements(elements[0]);
    } else if (props.match.path.slice(1) === "heren") {
      return setFilteredElements(elements[1]);
    } else {
      return setFilteredElements(elements[2]);
    }
  });

  const showMenu = category => {
    if (showSubList.includes(category)) {
      const filteredList = showSubList.filter(
        listItem => listItem !== category
      );
      return setShowSubList(filteredList);
    }
    setShowSubList(() => [...showSubList, category]);
  };

  const handleAddFilter = filter => {
    props.dispatch(addBaseFilter(filter.toLowerCase()));
  };

  return (
    <SidebarWrapper>
      <SidebarList>
        {filteredElements.map(({ category, subcategories }) => (
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
                <SidebarSubListItem
                  onClick={() => handleAddFilter(subcategory)}
                >
                  {subcategory}
                </SidebarSubListItem>
              ))}
            </SidebarSubList>
          </div>
        ))}
      </SidebarList>
    </SidebarWrapper>
  );
};

export default connect()(withRouter(Sidebar));

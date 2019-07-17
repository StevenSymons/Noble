import React, { useState } from "react";
import styled from "styled-components";
import arrowIcon from "../../../assets/icons/arrow.svg";
import { connect } from "react-redux";
import { addExtraFilter } from "../../../actions/filterActions";

const filters = [
  {
    category: "Maat",
    filters: ["S", "M", "L"]
  },
  {
    category: "Kleur",
    filters: ["zwart", "blauw", "red"]
  },
  {
    category: "In Stock",
    filters: ["ja", "nee"]
  }
];

const FiltersWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 3.5rem;
  width: 110px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.8rem;
  padding: 1rem 0;
  margin-right: 2rem;
  border: 1px solid rgba(41, 41, 41, 0.4);
  border-radius: 2px;
  width: 110px;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(41, 41, 41, 1);
  }
`;

const FilterList = styled.ul`
  margin: 0;
  padding: 0 0 0 1.5rem;
  border: ${props => (props.open ? "1px solid rgba(41, 41, 41, 0.4)" : "none")};
  list-style: none;
  border-radius: 2px;
  position: absolute;
  max-height: ${props => (props.open ? "auto" : "0%")};
  background-color: white;
  z-index: 150;
  width: 100%;
  overflow: hidden;
`;

const FilterListItem = styled.li`
  margin: 1rem 0;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
`;

const Image = styled.img`
  width: 1rem;
  transform: rotate(90deg);
`;

const CatalogFilters = ({ dispatch }) => {
  const [filterList, setFilterList] = useState([]);

  const showFilterList = category => {
    if (filterList.includes(category)) {
      const filteredList = filterList.filter(filter => {
        return filter !== category;
      });
      return setFilterList(filteredList);
    }
    setFilterList(() => [...filterList, category]);
  };

  const addFilter = filter => {
    dispatch(addExtraFilter(filter.toLowerCase()));
  };

  return (
    <FiltersWrapper>
      {filters.map(({ category, filters }) => (
        <div>
          <Filter onClick={() => showFilterList(category)}>
            {category}{" "}
            <span>
              <Image src={arrowIcon} />
            </span>
          </Filter>
          <FilterList open={filterList.includes(category)}>
            {filters.map(filter => {
              return (
                <FilterListItem onClick={() => addFilter(filter)}>
                  {filter}
                </FilterListItem>
              );
            })}
          </FilterList>
        </div>
      ))}
    </FiltersWrapper>
  );
};

export default connect()(CatalogFilters);

import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchFiltered } from 'http/userAPI';
import {
  SearchInput,
  SearchBarWrapper,
  BarWrapper,
  SearchSortWrapper,
  SortButton,
  SearchButton,
  SearchInputButtonWrapper,
  SearchIcon,
  SortSpan,
} from './styles';
import { Context } from 'index';

const SearchBar = ({
  nameLike,
  limit,
  page,
  role,
  ratingRange,
  dateSortType,
  onChange,
}) => {
  const { advertisement } = useContext(Context);
  const sortTypes = ['ASC', 'DESC'];
  const getSortType = (sortType) => {
    const sortItem = sessionStorage.getItem(sortType) || 'ASC';
    return sortItem;
  };

  const [dateSort, setDateSort] = useState(getSortType('createdAt'));

  const sortToggle = (sortType, setSortType) => {
    const sortItem = sessionStorage.getItem(sortType);
    let sortIndex;
    if (sortItem) sortIndex = sortTypes.indexOf(sortItem.toString());
    else sortIndex = 0;
    if (sortIndex != 1) {
      sessionStorage.setItem(sortType, sortTypes[sortIndex + 1]);
      setSortType(sortTypes[sortIndex + 1]);
    } else {
      sessionStorage.setItem(sortType, sortTypes[0]);
      setSortType(sortTypes[0]);
    }
    fetchFiltered(nameLike, limit, page, role, ratingRange, dateSortType).then(
      (data) => advertisement.setAdvertisement(data),
    );
  };

  const handleSearch = () => {
    fetchFiltered(nameLike, limit, page, role, ratingRange, dateSortType).then(
      (data) => advertisement.setAdvertisement(data),
    );
  };

  const handleInputEnter = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <BarWrapper>
      <SearchInputButtonWrapper>
        <SearchBarWrapper>
          <SearchInput
            onChange={onChange}
            onKeyDown={(e) => handleInputEnter(e)}
          />
        </SearchBarWrapper>
        <SearchButton onClick={handleSearch}>
          <SearchIcon /> <span>Search</span>
        </SearchButton>
      </SearchInputButtonWrapper>
      <SearchSortWrapper>
        <SortSpan>Sort By: </SortSpan>
        <SortButton
          onClick={() => sortToggle('createdAt', setDateSort)}
          sortType={dateSort}>
          Date
        </SortButton>
      </SearchSortWrapper>
    </BarWrapper>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  nameLike: PropTypes.string,
  limit: PropTypes.number,
  page: PropTypes.number,
  role: PropTypes.string,
  name: PropTypes.string,
  ratingRange: PropTypes.arrayOf(PropTypes.number),
  dateSortType: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

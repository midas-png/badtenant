import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

export const SearchWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-auto-columns: minmax(125px, auto);
  grid-template-columns: 1fr 3fr;
  gap: 30px;
  background: linear-gradient(150deg, #ff6700 0%, #ffb98a 100%);
  padding: 100px;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Enter the name',
})`
  border: none;
  outline: none;
  width: 99%;
  margin-left: 10px;
  border-radius: 10px;
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchSortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const SearchBarWrapper = styled.div`
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  border: 2px solid #dbdbdb;
  padding: 5px;
  display: flex;
  justify-content: center;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  padding-right: 15px;
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  justify-content: center;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 20px;
  height: 30px;
  width: 90px;
  transition: background 0.2s ease-in-out;
  background: ${({ sortType }) => (sortType !== 'ASC' ? '#ff6700' : '#fff')};
  color: ${({ sortType }) => (sortType !== 'ASC' ? '#fff' : '#000')};

  &:hover {
    background: ${({ sortType }) =>
    sortType !== 'ASC' ? '#ffa366' : '#bdbdbd'};
    cursor: pointer;
  }
`;

export const UserblockWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-template-rows: repeat(auto-fit, auto);
  gap: 20px;
  align-items: self-start;
  margin-top: 20px;
`;

export const NavigationWrapper = styled.div`
  min-width: 70px;
  background: #fff;
  padding: 10px 30px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 920px) {
    left: 5%;
  }

  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const NavigationButton = styled.span``;

export const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchFiltersWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border-radius: 30px;
  min-height: 100px;
  min-width: 250px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
`;

export const FiltersHR = styled.hr`
  background: #000;
  border: none;
  height: 2px;
  width: 90%;
  border-radius: 1px;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 100px;
  margin-top: 10px;
  width: 90%;
`;

export const FilterBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 50px;
  width: 90%;
`;

export const FilterLabel = styled.label`
  font-size: 15px;
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
`;

export const FilterButtonWrapper = styled.div``;

export const FilterButton = styled.button`
  background: #ff6700;
  border: 2px solid #ff6700;
  border-radius: 20px;
  color: #fff;
  padding: 10px 0;
  width: 100%;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: #ffa366;
    border: 2px solid #ffa366;
    cursor: pointer;
  }

  &:disabled {
    background: transparent;
    border: 2px solid #ff6700;
    color: #ff6700;
    cursor: default;

    &:hover {
      background: transparent;
      border: 2px solid #ff6700;
    }
  }
`;

export const SearchLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const SearchButton = styled.div`
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 5px 15px;
  border: none;
  border-radius: 20px;
  background: #ff6700;
  color: #fff;

  &:hover {
    transition: background 0.3s ease-in;
    background: #ffa366;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const SearchInputButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 10px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 18px;
`;

export const SearchBarOuterWrapper = styled.div`
  width: 70%;
`;

export const SortSpan = styled.span`
  color: #fff;
`;

export const ArrowIconUp = styled(TiArrowSortedUp)``;

export const ArrowIconDown = styled(TiArrowSortedDown)``;

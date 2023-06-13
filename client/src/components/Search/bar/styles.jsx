import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

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
  justify-content: center;
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
  width: 70%;
  min-width: 250px;
  max-width: 500px;
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

export const SearchButton = styled.div`
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 10px 15px;
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
  flex-wrap: wrap;
  gap: 20px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 18px;
`;

export const SortSpan = styled.span`
  color: #fff;
`;

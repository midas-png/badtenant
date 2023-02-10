import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #212121;
  width: 400px;
  height: 700px;
  padding-top: 80px;
`;
export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 100%;
  height: 50px;
`;

export const SearchBar = styled.input.attrs({
  placeholder: 'Enter name here...',
})`
  outline: none;
  border: 2px solid #787878;
  width: 290px;
  padding: 10px;
  margin-left: 10px;
  border-radius: 20px;
  -webkit-transition: border 2s;
  transition: border 0.5s;

  &:hover {
    border: 2px solid #fff;
  }

  &:focus {
    border: 2px solid #ff6700;
  }
`;

export const SearchList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

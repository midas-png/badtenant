import React, { useState } from 'react';
import {
  SidebarWrapper,
  SearchBarWrapper,
  SearchBar,
  SearchList,
} from './styles';
import SidebarUserblock from './SidebarUserblock/index';

const ChatSidebar = () => {
  const [activeDialoge, setActiveDialoge] = useState(0);

  const handleActiveDialoge = (id) => {
    setActiveDialoge(id);
  };

  return (
    <SidebarWrapper>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <SearchList>
        <SidebarUserblock
          id={2}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={4}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={12}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={122131}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={121424123}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={1214224123}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={18}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={17}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={16}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={15}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={14}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={1}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={143}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
        <SidebarUserblock
          id={14512}
          activeDialoge={activeDialoge}
          handleActiveDialoge={handleActiveDialoge}
        />
      </SearchList>
    </SidebarWrapper>
  );
};

export default ChatSidebar;

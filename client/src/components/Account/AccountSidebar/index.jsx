import {
  SidebarWrapper,
  SidebarItem,
  ItemsWrapper,
} from './styles';

const ProfileSidebar = () => {
  return (
    <SidebarWrapper>
      <ItemsWrapper>
        <SidebarItem
          to="main"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}>
          Main Information
        </SidebarItem>
        <SidebarItem
          to="offers"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}>
          Your offers
        </SidebarItem>
        <SidebarItem
          to="deals"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}>
          Your deals
        </SidebarItem>
        <SidebarItem
          to="safety"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}>
          Safety
        </SidebarItem>
      </ItemsWrapper>
    </SidebarWrapper>
  );
};

export default ProfileSidebar;

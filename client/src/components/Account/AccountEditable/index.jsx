import { useContext, useEffect, useState } from 'react';
import {
  AccountWrapper,
  FormLabel,
  MainInfoWrapper,
  MainInfoTitle,
  MainInfoHR,
  MainWrapper,
  FormInput,
  ProfilePicture,
  EditableWrapper,
  EditableInput,
  DescriptionItem,
} from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountPasswordSection from './AccountPassword/index';
import AccountOffersSection from './AccountOffers/index';
import AccountDeals from './AccountDeals/index';
import { ButtonRequest } from '../../ButtonElem';
import { Context } from '../../../index';
import { update } from '../../../http/userAPI';
import { getAdvertisement } from '../../../http/advertisementAPI';
import { Assets } from 'assets';

export const activateToast = (type, message) => {
  if (type == 'success') {
    toast.success(message);
  } else if (type == 'error') {
    toast.error(message);
  } else if (type == 'info') {
    toast.info(message);
  }
};

const AccountEditable = () => {
  const { user } = useContext(Context);
  const [userInfo, setUserInfo] = useState({
    comments: [],
    createdAt: '',
    description: '',
    email: '',
    first_name: '',
    id: 0,
    id_number: '',
    img: '',
    last_name: '',
    location: '',
    password: '',
    role: '',
    title: '',
    updatedAt: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const sendChange = (message) => {
    update(
      userInfo.id,
      userInfo.first_name,
      userInfo.last_name,
      userInfo.location,
      userInfo.description,
    );
    activateToast('success', message);
  };

  useEffect(() => {
    getAdvertisement(user.user.id).then((data) => {
      setUserInfo(data);
    });
  }, []);

  return (
    <AccountWrapper>
      <ToastContainer />
      <MainInfoWrapper id="main">
        <MainInfoTitle>Main Information</MainInfoTitle>
        <MainInfoHR />
        <MainWrapper>
          <ProfilePicture
            src={
              userInfo.img
                ? `http://217.151.229.239:5000/${userInfo.img}`
                : Assets.UserNoImage
            }
            alt='ProfileUser'
          />
          <EditableWrapper>
            <FormInput>
              <FormLabel htmlFor="first_name">First Name</FormLabel>
              <EditableInput
                id="first_name"
                name="first_name"
                value={userInfo.first_name}
                onChange={handleChange}
              />
            </FormInput>
            <FormInput>
              <FormLabel htmlFor="last_name">Last Name</FormLabel>
              <EditableInput
                id="last_name"
                name="last_name"
                value={userInfo.last_name}
                onChange={handleChange}
              />
            </FormInput>
            <FormInput>
              <FormLabel htmlFor="location">Your Location</FormLabel>
              <EditableInput
                id="location"
                name="location"
                value={userInfo.location}
                onChange={handleChange}
              />
            </FormInput>
            <FormInput>
              <FormLabel htmlFor="description">Your Bio</FormLabel>
              <DescriptionItem
                id="description"
                name="description"
                description={true}
                value={userInfo.description}
                onChange={handleChange}
              />
            </FormInput>
            <ButtonRequest
              primary={true}
              onClick={() => sendChange('Your changes saved!')}>
              Save Changes
            </ButtonRequest>
          </EditableWrapper>
        </MainWrapper>
      </MainInfoWrapper>
      <AccountOffersSection />
      <AccountDeals />
      <AccountPasswordSection userPassword={userInfo.password} />
    </AccountWrapper>
  );
};

export default AccountEditable;

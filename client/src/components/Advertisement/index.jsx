import { useContext, useState, useEffect } from 'react';
import {
  AdvertisementWrapper,
  AdvertisementName,
  AdvertisementImage,
  AdvertisementComments,
  CommentUnit,
  CommentWrapper,
  CommentImage,
  CommentContent,
  AdvertisementFunctions,
  FunctionLink,
  NavigationWrapper,
  RatingWrapper,
  CommentHeader,
  UserNotLogonSpanWrapper,
  UserNotLogonSpan,
} from './styles';
import {
  ModalWrapper,
  ModalTitle,
  ModalDateWrapper,
  ModalDate,
  ModalLabel,
  DateWrapper,
  ButtonsWrapper,
  ModalButton,
  TextAreaWrapper,
  TextArea,
  WarningWrapper,
  WarningIcon,
  WarningText,
} from './modalStyles';
import { GrFormPrevious } from 'react-icons/gr';
import { Modal } from 'ui';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Context } from 'index';
import { animateScroll as scroll } from 'react-scroll';
import { getAdvertisement } from 'http/advertisementAPI';
import { Rating } from 'ui';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { styled } from '@mui/material/styles';
import { Temporal } from '@js-temporal/polyfill';
import { createOffer } from 'http/offersAPI';
import { ToastContainer, toast } from 'react-toastify';
import { Assets } from 'assets';
import 'react-toastify/dist/ReactToastify.css';

const StyledItem = styled(PaginationItem)`
  color: #000;

  :hover {
    color: #292929;
  }
`;

const AdvertisementComponent = () => {
  const [modalActive, setModalActive] = useState(false);
  const [advertisementInfo, setAdvertisementInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 8;
  const [countPage, setCountPage] = useState(0);
  const [comments, setComments] = useState([]);
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [offerDescription, setOfferDescription] = useState('');
  const { id } = useParams();
  const { user } = useContext(Context);
  const commentCounter = 0;
  const navigate = useNavigate();

  useEffect(() => {
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    setComments(
      advertisementInfo.comments?.slice(
        indexOfFirstComment,
        indexOfLastComment,
      ),
    );
  }, [currentPage]);

  useEffect(() => {
    const temporalDateFrom = new Temporal.PlainDate(
      dateFrom.getUTCFullYear(),
      dateFrom.getUTCMonth() + 1,
      dateFrom.getUTCDate(),
    );
    const temporalDateTo = new Temporal.PlainDate(
      dateTo.getUTCFullYear(),
      dateTo.getUTCMonth() + 1,
      dateTo.getUTCDate(),
    );
    if (temporalDateFrom.until(temporalDateTo).days < 0) {
      setDateTo(dateFrom);
    }
  }, [dateFrom, dateTo]);

  const sendOffer = () => {
    try {
      createOffer(
        user.user.id,
        parseInt(id),
        new Temporal.PlainDate(
          dateFrom.getUTCFullYear(),
          dateFrom.getUTCMonth() + 1,
          dateFrom.getUTCDate(),
        ).toString(),
        new Temporal.PlainDate(
          dateTo.getUTCFullYear(),
          dateTo.getUTCMonth() + 1,
          dateTo.getUTCDate(),
        ).toString(),
        offerDescription,
      )
        .then(() => {
          setModalActive(false);
          toast.success('Offer was successfully sent!');
        })
        .catch(() =>
          toast.error('Oops! Something went wrong. Try again later.'),
        );
    } catch (e) {
      toast.error('Oops! Something went wrong. Try again later.');
    }
  };

  const bringToHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (window.scrollY >= 80) {
      bringToHome();
    }
  }, []);

  useEffect(() => {
    getAdvertisement(id).then((data) => {
      setCountPage(Math.ceil(data.comments?.length / commentsPerPage));
      setComments(data.comments?.slice(0, commentsPerPage));
      setAdvertisementInfo(data);
    });
  }, [id]);

  const handleChange = (e, value) => {
    setCurrentPage(value);
  };

  const getRating = () => {
    let averageRating = 0;
    let ratingLength = 0;

    advertisementInfo.comments?.forEach((element) => {
      averageRating = averageRating + element.rate;
      ratingLength++;
    });
    return ratingLength != 0
      ? Math.floor((averageRating / ratingLength) * 2) / 2
      : 0;
  };

  return (
    <>
      <ToastContainer />
      <AdvertisementWrapper>
        <AdvertisementImage
          src={
            advertisementInfo?.img
              ? `http://217.151.229.239:5000/${advertisementInfo.img}`
              : Assets.UserNoImage
          }
        />
        <NavigationWrapper onClick={() => navigate(-1)}>
          <GrFormPrevious />
        </NavigationWrapper>
        <AdvertisementName>{advertisementInfo.title}</AdvertisementName>
        <RatingWrapper>
          {user.isAuth ? (
            <Rating rate={getRating()} scale={6} />
          ) : (
            <UserNotLogonSpanWrapper>
              <UserNotLogonSpan>
                Log in to see the rating and comments
              </UserNotLogonSpan>
            </UserNotLogonSpanWrapper>
          )}
        </RatingWrapper>
        {user.isAuth && (
          <>
            <AdvertisementFunctions>
              {user.user.id != id ? (
                <FunctionLink onClick={() => setModalActive(true)}>
                  Send Offer
                </FunctionLink>
              ) : (
                <FunctionLink>It&apos;s your account</FunctionLink>
              )}
            </AdvertisementFunctions>
            <AdvertisementComments commentCounter={commentCounter}>
              <CommentHeader>
                <span>Reviews</span>
                <hr
                  style={{
                    width: '250%',
                  }}
                />
              </CommentHeader>
              {comments
                ?.filter((comment) => {
                  if (comment.to_id == id) {
                    return comment;
                  }
                })
                .map((comment) => {
                  const userImage = comment.img
                    ? 'http://217.151.229.239:5000/' + comment.img
                    : Assets.UserNoImage;
                  return (
                    <CommentWrapper key={comment.id}>
                      <Link to={'/advertisement/' + comment.from_id}>
                        <CommentImage src={userImage} />
                      </Link>
                      <CommentContent>
                        <Link to={'/advertisement/' + comment.from_id}>
                          <span>{comment.name}</span>
                        </Link>
                        <Rating rate={comment.rate} />
                        <CommentUnit>{comment.text}</CommentUnit>
                      </CommentContent>
                    </CommentWrapper>
                  );
                })}
              {advertisementInfo.comments?.length === 0 && (
                <span style={{ padding: '30px' }}>
                  No reviews yet. Send a deal first!
                </span>
              )}
            </AdvertisementComments>
          </>
        )}
        {modalActive ? (
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalWrapper>
              <ModalTitle>Send Offer</ModalTitle>
              <ModalDateWrapper>
                <DateWrapper>
                  <ModalLabel htmlFor="date_from">Date From</ModalLabel>
                  <ModalDate
                    id="date_from"
                    selected={dateFrom}
                    onChange={(date) => setDateFrom(date)}
                    minDate={new Date()}
                    showDisabledMonthNavigation
                  />
                </DateWrapper>
                <DateWrapper>
                  <ModalLabel htmlFor="date_to">Date To</ModalLabel>
                  <ModalDate
                    id="date_to"
                    selected={dateTo}
                    onChange={(date) => setDateTo(date)}
                    minDate={dateFrom}
                    showDisabledMonthNavigation
                  />
                </DateWrapper>
                {user.user.role === advertisementInfo.role && (
                  <WarningWrapper>
                    <WarningIcon />
                    <WarningText>
                      You both are{' '}
                      {user.user.role === 'TENANT' ? 'tenants' : 'landlords'}.
                      <br />
                      Remember this when sending an offer!
                    </WarningText>
                  </WarningWrapper>
                )}
                <TextAreaWrapper>
                  <TextArea
                    onChange={(e) => setOfferDescription(e.target.value)}
                  />
                </TextAreaWrapper>
                <ButtonsWrapper>
                  <ModalButton onClick={() => setModalActive(false)}>
                    Cancel
                  </ModalButton>
                  <ModalButton primary={true} onClick={() => sendOffer()}>
                    Send Offer
                  </ModalButton>
                </ButtonsWrapper>
              </ModalDateWrapper>
            </ModalWrapper>
          </Modal>
        ) : null}
        {user.isAuth && comments?.length ? (
          <Pagination
            count={countPage}
            onChange={handleChange}
            size="large"
            renderItem={(item) => <StyledItem {...item} />}
          />
        ) : null}
      </AdvertisementWrapper>
    </>
  );
};

export default AdvertisementComponent;

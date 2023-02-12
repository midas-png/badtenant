import { useState, useContext, useLayoutEffect, useEffect } from 'react';
import {
  SearchWrapper,
  SearchLeftWrapper,
  UserblockWrapper,
  PaginationWrapper,
  SearchResultWrapper,
  SearchFiltersWrapper,
  SearchBarOuterWrapper,
  FiltersHR,
  FiltersWrapper,
  FilterBlockWrapper,
  FilterLabel,
  FilterButtonWrapper,
  FilterButton,
  RadioButtonsWrapper,
} from './styles';
import { Userblock } from 'components';
import { ToastContainer, toast } from 'react-toastify';
import Slider from '@mui/material/Slider';
import { Context } from '../..';
import { Temporal } from '@js-temporal/polyfill';
import { observer } from 'mobx-react-lite';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { getAdvertisements } from '../../http/advertisementAPI';
import { getTotalNumberOfUsers, fetchFiltered } from '../../http/userAPI';
import SearchBar from './bar';
import { styled } from '@mui/material/styles';
import { RadioButton } from '../../ui/index';

const StyledItem = styled(PaginationItem)`
  color: #fff;

  :hover {
    color: #dbdbdb;
  }
`;

const sortItem = sessionStorage.getItem('createdAt') || 'ASC';

const activateToast = (type, message) => {
  if (type == 'success') {
    toast.success(message);
  } else if (type == 'error') {
    toast.error(message);
  } else if (type == 'info') {
    toast.info(message);
  }
};

const SearchComponent = observer(() => {
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersRole, setFiltersRole] = useState('ALL');
  const [filtersRatingSlider, setFiltersRatingSlider] = useState([0, 5]);
  const [chandingNotAvaliable, setChangingNotAvaliable] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(9);
  const { advertisement, user } = useContext(Context);

  useLayoutEffect(() => {
    if (!sessionStorage.getItem('appliedFiltersRole')) {
      sessionStorage.setItem('appliedFiltersRole', 'ALL');
    } else if (sessionStorage.getItem('filtersRole')) {
      setFiltersRole(sessionStorage.getItem('filtersRole'));
    } else {
      setFiltersRole(sessionStorage.getItem('appliedFiltersRole'));
    }

    if (!sessionStorage.getItem('appliedFiltersRatingSlider')) {
      sessionStorage.setItem('appliedFiltersRatingSlider', [0, 5]);
    } else if (sessionStorage.getItem('filtersRatingSlider')) {
      const filtersSessionArray = sessionStorage
        .getItem('filtersRatingSlider')
        .split(',')
        .map(Number);
      setFiltersRatingSlider(filtersSessionArray);
    } else {
      const filtersSessionArray = sessionStorage
        .getItem('appliedFiltersRatingSlider')
        .split(',')
        .map(Number);
      setFiltersRatingSlider(filtersSessionArray);
    }
  }, []);

  useEffect(() => {
    if (
      sessionStorage.getItem('appliedFiltersRole') == filtersRole &&
      sessionStorage.getItem('appliedFiltersRatingSlider') ==
        filtersRatingSlider.toString()
    ) {
      setChangingNotAvaliable(true);
    } else {
      setChangingNotAvaliable(false);
    }
  }, [filtersRole, filtersRatingSlider]);

  useEffect(() => {
    getTotalNumberOfUsers().then((data) => {
      if (user.isAuth) {
        data = data - 1;
      }
      setPageCount(Math.ceil(data / 9));
    });
  }, [user.isAuth]);

  useEffect(() => {
    getAdvertisements(pageNumber).then((data) =>
      advertisement.setAdvertisement(data),
    );
    getAdvertisements(pageNumber).then((data) =>
      advertisement.setComments(data),
    );
  }, [pageNumber]);

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  const handleFiltersApply = () => {
    if (user.isAuth) {
      sessionStorage.setItem('appliedFiltersRole', filtersRole);
      sessionStorage.setItem(
        'appliedFiltersRatingSlider',
        filtersRatingSlider.toString(),
      );
      fetchFiltered(
        searchTerm,
        limit,
        pageNumber,
        filtersRole,
        filtersRatingSlider,
        sortItem,
      )
        .then((data) => {
          advertisement.setAdvertisement(data);
          advertisement.setComments(data);
        })
        .catch((error) => console.error(error));
      setChangingNotAvaliable(true);
    } else {
      activateToast('error', 'You must login to use filter');
    }
  };

  const handleRoleFilterChange = (role) => {
    setFiltersRole(role);
    sessionStorage.setItem('filtersRole', role);
  };

  const handleSliderChange = (event, value) => {
    setFiltersRatingSlider(value);
    sessionStorage.setItem('filtersRatingSlider', value);
  };

  const getRating = (id) => {
    let averageRating = 0;
    let ratingLength = 0;

    advertisement.comments.map((value) => {
      JSON.parse(JSON.stringify(value.comments)).forEach((element) => {
        if (element.to_id == id) {
          averageRating = averageRating + element.rate;
          ratingLength++;
        }
      });
    });
    return ratingLength != 0
      ? Math.floor((averageRating / ratingLength) * 2) / 2
      : 0;
  };

  return (
    <>
      <ToastContainer />
      <SearchWrapper>
        <SearchLeftWrapper>
          <SearchFiltersWrapper>
            <h2>Filters</h2>
            <FiltersHR />
            <FiltersWrapper>
              <FilterBlockWrapper>
                <FilterLabel>I&apos;m searching for...</FilterLabel>
                <RadioButtonsWrapper>
                  <RadioButton
                    id="allRadio"
                    label="All"
                    name="ALL"
                    isFontDark="true"
                    value={filtersRole === 'ALL'}
                    onChange={() => handleRoleFilterChange('ALL')}
                  />
                  <RadioButton
                    id="tenantRadio"
                    label="Tenant"
                    name="TENANT"
                    isFontDark="true"
                    value={filtersRole === 'TENANT'}
                    onChange={() => handleRoleFilterChange('TENANT')}
                  />
                  <RadioButton
                    id="landlordRadio"
                    label="Landlord"
                    name="LANDLORD"
                    isFontDark="true"
                    value={filtersRole === 'LANDLORD'}
                    onChange={() => handleRoleFilterChange('LANDLORD')}
                  />
                </RadioButtonsWrapper>
              </FilterBlockWrapper>
              <FilterBlockWrapper>
                <FilterLabel>Rating Range (Stars)</FilterLabel>
                <Slider
                  getAriaLabel={() => 'Always visible'}
                  value={filtersRatingSlider}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  step={0.5}
                  min={0}
                  max={5}
                  marks={[
                    {
                      value: 0,
                      label: '0',
                    },
                    {
                      value: 1,
                      label: '1',
                    },
                    {
                      value: 2,
                      label: '2',
                    },
                    {
                      value: 3,
                      label: '3',
                    },
                    {
                      value: 4,
                      label: '4',
                    },
                    {
                      value: 5,
                      label: '5',
                    },
                  ]}
                  disableSwap
                  style={{
                    color: '#ff6700',
                  }}
                />
              </FilterBlockWrapper>
              <FilterButtonWrapper>
                <FilterButton
                  disabled={chandingNotAvaliable}
                  onClick={handleFiltersApply}>
                  Apply Filters
                </FilterButton>
              </FilterButtonWrapper>
            </FiltersWrapper>
          </SearchFiltersWrapper>
        </SearchLeftWrapper>
        <SearchResultWrapper>
          <SearchBarOuterWrapper>
            <SearchBar
              nameLike={searchTerm}
              limit={limit}
              page={pageNumber}
              role={filtersRole}
              ratingRange={filtersRatingSlider}
              dateSortType={sortItem}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </SearchBarOuterWrapper>
          <div>
            <UserblockWrapper>
              {advertisement.advertisements
                .filter((value) => {
                  if (value.id != user.user.id) {
                    return value;
                  }
                })
                .map((ad) => (
                  <Userblock
                    key={ad.id}
                    linkTo={ad.id}
                    userName={ad.title}
                    userLocation={ad.location}
                    userRate={getRating(ad.id)}
                    totalComments={ad.comments.length}
                    registrationDate={Temporal.Instant.from(ad.createdAt)
                      .toZonedDateTimeISO('America/Los_Angeles')
                      .toPlainDate()
                      .toString()}
                  />
                ))}
            </UserblockWrapper>
            <PaginationWrapper>
              <Pagination
                count={pageCount}
                page={pageNumber}
                onChange={handleChange}
                size="large"
                renderItem={(item) => <StyledItem {...item} />}
              />
            </PaginationWrapper>
          </div>
        </SearchResultWrapper>
      </SearchWrapper>
    </>
  );
});

export default SearchComponent;

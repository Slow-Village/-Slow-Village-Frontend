import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

import BellRedIcon from '~assets/icons/bell_red.svg';
import ProfileIcon from '~assets/icons/profile.svg';
import SearchIcon from '~assets/icons/search.svg';
import grandma_1_card from '~assets/images/grandma_1_card.png';
import grandma_3_card from '~assets/images/grandma_3_card.png';
import grandma_4_card from '~assets/images/grandma_4_card.png';
import grandma_5_card from '~assets/images/grandma_5_card.png';
import address_json from '~assets/data/address.json';

import {FilterState} from '~store/FilterState'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--safe-top) 38px 0;
  height: calc(54px + var(--safe-top));
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 8px;
  svg {
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  display: flex;
  padding: 8px 8px 8px 28px;
  align-items: center;
  gap: 22px;
  border-radius: 500px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);

  color: #222222;
  font-size: 13px;
  font-weight: 600;
  margin: 0 18px;
  justify-content: flex-end;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 14px;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #ebebeb;
`;

const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 32px 0 20px;
`;

const CardList = styled(Swiper)`
  width: 334px;
  height: 524px;
  overflow: visible !important;
`;

const Card = styled(SwiperSlide)`
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CardContent = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 36px;
  left: 24px;
  right: 24px;
  color: #ffffff;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.div`
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-weight: 700;
`;

const CardDesc = styled.div`
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
`;

const Button = styled.button`
  padding: 0 40px;
  height: 44px;
  border-radius: 49px;
  border: 1px solid #000;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  align-self: center;
`;

const Select = styled.select`
  border: 0;
  outline: none;
  color: #222222;
  font-size: 13px;
  font-weight: 600;
`

const Option = styled.option`
  border-radius: 500px;
  border: 1px solid #ebebeb;
  background-color: #ffffff;
  color: #222222;
  font-size: 13px;
  font-weight: 600;
`

const DateBlock = styled.span `
  min-width : 100px;
`

const CustomDayPicker = styled(DayPicker)`
  position: absolute;
  top: 15%;
  left: 2%;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  z-index: 999;
  
  .rdp-caption {
    justify-content: center;
  }
  .rdp-caption_label {
    font-size: 16px;
    margin-top: 6px;
  }
  .rdp-nav {
    margin-top: 13px;
    button[name="previous-month"] {
      width: 23px;
      height: 23px;
    }
    button[name="next-month"] {
      width: 23px;
      height: 23px;
    }
  }
  .react-datepicker__navigation--next {
    background: url(../images/rightArrow.png) no-repeat;
    border: none;
}
`

const Search = styled.a `
  cursor: pointer;
`

type Address = {
  address: Array<GuAddress>;
}

type GuAddress = {
  eng_name: string;
  kor_name: string;
}

const pastMonth = new Date();

const MainPage = () => {
  const navigate = useNavigate();
  const address: Address = address_json;
  let footer = <p></p>;

  const [filters, setFilters] = useRecoilState(FilterState);
  const [currentAddress, setCurrentAddress] = useState("Gangseo-gu");
  const [currentHeadcount, setCurrentHeadcount] = useState(1);

  const [calendarSwitch, setCalendarSwitch] = useState(false);
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  const handleChangeAddress = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentAddress(event.target.value);
  }

  const handleHeadcount = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentHeadcount(parseInt(event.target.value));
  }

  const handleFilter = () => {
    setFilters((filters: any) => ({
      ...filters,
      address: currentAddress,
      headcount: currentHeadcount
    }));
  };

  return (
    <>
      <Header>
        <HeaderTitle>Schedule</HeaderTitle>
        <HeaderRight>
          <BellRedIcon />
          <ProfileIcon onClick={() => navigate('/profile')} />
        </HeaderRight>
      </Header>
      <SearchBar>
        <div>
          <DateBlock onClick={() => setCalendarSwitch(!calendarSwitch)}>{range !== undefined && range.from !== undefined ? format(range.from, 'MMM dd') : ""} - {range !== undefined && range.to !== undefined ? format(range.to, 'MMM dd') : ""}</DateBlock>
          {
            calendarSwitch ? <CustomDayPicker
            mode="range"
            defaultMonth={pastMonth}
            selected={range}
            footer={footer}
            onSelect={setRange}
            showOutsideDays
          /> : ""
          }
          <Divider />
          <Select value={currentAddress} onChange={handleChangeAddress}>
            {
              address.address.map((gu) => {
                return (<Option value={gu.eng_name} >{gu.eng_name}</Option>);
              })
            }
          </Select>
          <Divider />
          <Select value={currentHeadcount} onChange={handleHeadcount}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
        </div>
        <Search onClick={handleFilter}>
          <SearchIcon />
        </Search>
      </SearchBar>
      <CardListContainer>
        <CardList
          slidesPerView={1}
          centeredSlides
          spaceBetween={10}
          pagination={{
            type: 'fraction',
          }}
        >
          <Card onClick={() => navigate('/details/asd')}>
            <img src={grandma_3_card} alt="grandma_3_card" />
            <CardContent>
              <CardTitle>
                I have a<br />
                dream too
              </CardTitle>
              <CardDesc>Busan Jung-gu / Youngsook Kim</CardDesc>
            </CardContent>
          </Card>
          <Card onClick={() => navigate('/details/asd')}>
            <img src={grandma_1_card} alt="grandma_1_card" />
            <CardContent>
              <CardTitle>
                Lived in Busan,
                <br />
                for 50 years
              </CardTitle>
              <CardDesc>Namchun-dong, Busan / Oksun Kim</CardDesc>
            </CardContent>
          </Card>
          <Card onClick={() => navigate('/details/asd')}>
            <img src={grandma_4_card} alt="grandma_4_card" />
            <CardContent>
              <CardTitle>
                At my house
                <br />
                Let&apos;s eat pork soup
              </CardTitle>
              <CardDesc>Sinwol-dong, Busan / Sunja Song</CardDesc>
            </CardContent>
          </Card>
          <Card onClick={() => navigate('/details/asd')}>
            <img src={grandma_5_card} alt="grandma_5_card" />
            <CardContent>
              <CardTitle>
                Gukbap master
                <br />
                Lee Yeong-soon
              </CardTitle>
              <CardDesc>Seo-gu, Busan / Youngsoon Lee</CardDesc>
            </CardContent>
          </Card>
        </CardList>
      </CardListContainer>
      <Button onClick={() => navigate('/reviews/asd')}>
        Story with Grandma &gt;
      </Button>
    </>
  );
};

export default MainPage;

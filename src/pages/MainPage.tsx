import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import BellRedIcon from '~assets/icons/bell_red.svg';
import ProfileIcon from '~assets/icons/profile.svg';
import SearchIcon from '~assets/icons/search.svg';
import grandma_1_card from '~assets/images/grandma_1_card.png';

import 'swiper/css';
import '~styles/swiper.css';

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
`;

const SearchBar = styled.div`
  display: flex;
  padding: 8px 8px 8px 28px;
  align-items: center;
  gap: 22px;
  border-radius: 500px;
  border: 1px solid #ebebeb;
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

const MainPage = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <HeaderTitle>Schedule</HeaderTitle>
        <HeaderRight>
          <BellRedIcon />
          <ProfileIcon />
        </HeaderRight>
      </Header>
      <SearchBar>
        <div>
          <span>Oct 18-Nov 22</span>
          <Divider />
          <span>Songdo, Busan</span>
          <Divider />
          <span>1</span>
        </div>
        <SearchIcon />
      </SearchBar>
      <CardListContainer>
        <CardList
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides
          spaceBetween={10}
          pagination={{
            type: 'fraction',
          }}
        >
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
        </CardList>
      </CardListContainer>
      <Button onClick={() => navigate('/reviews/asd')}>
        Story with Grandma &gt;
      </Button>
    </>
  );
};

export default MainPage;

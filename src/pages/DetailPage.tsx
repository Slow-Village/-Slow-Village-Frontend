import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import grandma_1 from '~assets/images/grandma_1.png';
import grandma_1_1 from '~assets/images/grandma_1_1.png';
import grandma_1_2 from '~assets/images/grandma_1_2.png';
import MoveBackButton from '~components/MoveBackButton';
import ShareButton from '~components/ShareButton';

import data from '~assets/data/data.json';
import { useRecoilValue } from 'recoil';

import { FilterState } from '~store/FilterState';

import { format } from 'date-fns';

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;

  top: var(--safe-top);
  left: 0;
  right: 0;
  padding: 0 22px;
`;

const Container = styled.div`
  padding: 0 22px var(--safe-bottom);
  display: flex;
  flex-direction: column;

  & > img {
    margin: 20px -20px 0;
  }
`;

const Title = styled.h1`
  margin-top: 44px;
  font-size: 20px;
  font-weight: 600;
`;

const Summary = styled.p`
  margin-top: 12px;
  font-size: 12px;
  font-weight: 600;
`;

const Content = styled.p`
  margin-top: 20px;
  color: #000;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 12px -20px 20px;
`;

const CardListHeader = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin: 22px 22px 0;
`;

const CardList = styled(Swiper)`
  width: 288px;
  height: 184px;
  overflow: visible !important;
`;

const Card = styled(SwiperSlide)`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const CardContent = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 12px;
  left: 20px;
  right: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const CardTopDesc = styled.div`
  font-size: 10px;
  font-weight: 600;
`;

const DetailHeader = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 22px;
`;

const DetailList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-top: 6px;
`;

const DetailItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const Button = styled.button`
  border-radius: 19px;
  background-color: #f4bb40;
  padding: 12px 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;

  margin-top: 76px;
`;

const DetailDescription = styled.p`
  margin-top: 6px;
  color: #000;
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: underline;
  text-align: center;
`;

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const article = data.items.find((item) => item.id === Number(id))!;
  const filters = useRecoilValue(FilterState);
  return (
    <>
      <TopBar>
        <MoveBackButton />
        <ShareButton />
      </TopBar>
      <img
        src={`${import.meta.env.BASE_URL}/${article.image}`}
        alt="grandma_1"
      />
      <Container>
        <Title>
          {article.title} {article.title2}
        </Title>
        <Summary>
          {article.address}, Busan / {article.first_name} {article.last_name}
        </Summary>

        {article.contents.map((content) => {
            if (content.type === 'text') {
              return <Content>{content.content}</Content>
            }
            if (content.type === 'image') {
              return <img src={`${import.meta.env.BASE_URL}/${content.content}`} alt={content.content} />
            }
          })
        })}
        <CardListHeader>Stay stories</CardListHeader>
        <CardListContainer>
          <CardList
            slidesPerView={1}
            centeredSlides
            spaceBetween={20}
            pagination={{
              type: 'fraction',
            }}
          >
            {article.reviews.map((review, index) => {
              return (
                <Card onClick={() => navigate(`/reviews/${id}-${index}`)}>
                  <img
                    src={`${import.meta.env.BASE_URL}/${review.url}`}
                    alt={review.url}
                  />
                  <CardContent>
                    <CardTopDesc>
                      User: user{Math.random().toString().slice(2)}
                    </CardTopDesc>
                    <CardTitle>{review.title}</CardTitle>
                  </CardContent>
                </Card>
              );
            })}
          </CardList>
        </CardListContainer>
        <DetailHeader>Exploring {article.first_name}&apos;s House</DetailHeader>
        <DetailList>
          {article.features.map((feature) => {
            return <DetailItem>{feature}</DetailItem>;
          })}
        </DetailList>
        <Button onClick={() => navigate(`/confirm-order/${id}`)}>
          Visiting Grandma {article.first_name} {article.last_name}
        </Button>
        <DetailDescription>
          Reservation Dates: {format(filters.range_from, 'MMM do')} -{' '}
          {format(filters.range_to, 'MMM do')} | 15,000 won / 1 night
        </DetailDescription>
      </Container>
    </>
  );
};

export default DetailPage;

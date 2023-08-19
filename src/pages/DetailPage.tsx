import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import grandma_1 from '~assets/images/grandma_1.png';
import grandma_1_1 from '~assets/images/grandma_1_1.png';
import grandma_1_2 from '~assets/images/grandma_1_2.png';
import MoveBackButton from '~components/MoveBackButton';
import ShareButton from '~components/ShareButton';

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
  return (
    <>
      <TopBar>
        <MoveBackButton />
        <ShareButton />
      </TopBar>
      <img src={grandma_1} alt="grandma_1" />
      <Container>
        <Title>Lived in Busan for 50 years</Title>
        <Summary>Namchun-dong, Busan / 73th years old / Oksun Kim</Summary>
        <Content>
          Hello there! I&apos;m Kim Ok-soon. From a young age until now,
          I&apos;ve been living and breathing in Busan for decades, becoming a
          true Busan gem. You won&apos;t believe how my heart skips a beat and
          my energy surges when I hear someone whispering in the Busan dialect.
          It&apos;s like the feeling when you sit down and stand up after
          savoring a piping hot bowl of soup - that same warmth spreads through
          you. Just like the tender broth, looking at others with the same Busan
          heart and speaking in our dialect warms my spirit.
          <br />
          <br />
          Busan is a city with its head held high and feet that move quickly.
          It&apos;s not just a phrase but something I&apos;ve felt firsthand, as
          if I&apos;ve touched it with my own hands. The elderly folks on the
          streets greet you with smiles, making the whole place feel like a
          village where everyone smiles like sunshine. People who greet each
          other respectfully wherever they go - when translated into the Busan
          dialect, it&apos;s even more intriguing and feels like a fragrant
          flower blooming in your heart.
          <br />
          Walking along Busan&apos;s coastline, I&apos;ve enjoyed the proud
          beauty of our unique scenery, often accompanied by the bright smiles
          of travelers. With the sun shining over the white sandy beach, the
          shadows spreading out, it&apos;s as if the charm of Busan that
          I&apos;ve always held dear becomes yet another picturesque landscape.
          I feel fortunate to have been born a Busanite. Living confidently in
          such a charming city fills me with joy.
          <br />
        </Content>
        <img src={grandma_1_1} alt="grandma_1_1" />
        <Content>
          In my youth, I had dreams about Busan, but now, as a true Busan
          native, I&apos;m grateful to experience its beauty firsthand and share
          happy times. As I tell stories about my little hometown of Busan, I
          hope to spread the flames of Busan&apos;s love to others. I want to
          continue cherishing Busan, sharing its beauty with others, and
          embracing the moments that lie ahead. I&apos;ll never forget that
          Busan is both my proud hometown and an integral part of my life.
        </Content>
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
            <Card onClick={() => navigate('/reviews/asd')}>
              <img src={grandma_1_2} alt="grandma_1_2" />
              <CardContent>
                <CardTopDesc>User: hello1289</CardTopDesc>
                <CardTitle>
                  Lived in Busan,
                  <br />
                  for 50 years
                </CardTitle>
              </CardContent>
            </Card>
            <Card onClick={() => navigate('/reviews/asd')}>
              <img src={grandma_1_2} alt="grandma_1_2" />
              <CardContent>
                <CardTopDesc>User: hello1289</CardTopDesc>
                <CardTitle>
                  Lived in Busan,
                  <br />
                  for 50 years
                </CardTitle>
              </CardContent>
            </Card>
            <Card onClick={() => navigate('/reviews/asd')}>
              <img src={grandma_1_2} alt="grandma_1_2" />
              <CardContent>
                <CardTopDesc>User: hello1289</CardTopDesc>
                <CardTitle>
                  Lived in Busan,
                  <br />
                  for 50 years
                </CardTitle>
              </CardContent>
            </Card>
          </CardList>
        </CardListContainer>
        <DetailHeader>Exploring Cheongja&apos;s House</DetailHeader>
        <DetailList>
          <DetailItem>
            Grandma&apos;s house, where she has resided for over 30 years, is
            filled with warm affection.
          </DetailItem>
          <DetailItem>
            There are a total of 2 rooms, and one of them can be separated for
            guest use.
          </DetailItem>
          <DetailItem>
            The rooms are equipped with essentials such as air conditioning, a
            desk, a bed, and Wi-Fi.
          </DetailItem>
          <DetailItem>
            The bathroom features a bidet, and a washing machine is also
            provided.
          </DetailItem>
        </DetailList>
        <Button onClick={() => navigate('/confirm-order/asd')}>
          Visiting Grandma Park Cheongja
        </Button>
        <DetailDescription>
          Reservation Dates: Aug 20th - Sept 20th | 15,000 won / 1 night
        </DetailDescription>
      </Container>
    </>
  );
};

export default DetailPage;

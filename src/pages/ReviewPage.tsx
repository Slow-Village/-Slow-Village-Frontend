import styled from '@emotion/styled';

import grandma_2 from '~assets/images/grandma_2.png';
import grandma_2_1 from '~assets/images/grandma_2_1.png';
import grandma_2_2 from '~assets/images/grandma_2_2.png';
import grandma_2_3 from '~assets/images/grandma_2_3.png';
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

  img {
    margin-top: 20px;
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

const ReviewPage = () => {
  return (
    <>
      <TopBar>
        <MoveBackButton />
        <ShareButton />
      </TopBar>
      <img src={grandma_2} alt="grandma_2" />
      <Container>
        <Title>
          See you again grandma.
          <br />
          I’ll bring my boyfriend next time.
        </Title>
        <Summary>
          Grandmother&apos;s house filled with love / Park Cheongja
        </Summary>
        <Content>
          Our first meeting was on a sunny day. My grandmother welcomed me with
          a warm smile, and from that moment on, a corner of my heart was filled
          with warmth. The fragrant coffee times and cooking sessions we shared
          on early mornings were dazzlingly beautiful. The dishes created by my
          grandmother&apos;s touch were also uniquely delicious. Her secret
          ingredient was &apos;love&apos;.
          <br />
          <br />
          The time we spent together for a month was always filled with
          happiness. My grandmother shared stories ranging from her childhood to
          the most recent ones. During those moments, I felt as if time stood
          still, and I got lost in her stories. The warmth and experience in her
          eyes, which I could see, gave me great courage and strength.
          <br />
        </Content>
        <img src={grandma_2_1} alt="grandma_2_1" />
        <Content>
          The time together always seemed to pass quickly. On the last day spent
          with my grandmother, I promised myself that I would forever remember
          this treasure-like time. The path we walked, holding my
          grandmother&apos;s hand, will remain a precious treasure in my heart.
        </Content>
        <img src={grandma_2_2} alt="grandma_2_2" />
        <img src={grandma_2_3} alt="grandma_2_3" />
        <Content>
          This past month was a meaningful time for me. The moments spent with
          my grandmother gave me great inspiration and love. Now, I want to
          share these memories with all of you through a blog post, to share all
          the emotions and gratitude. I will cherish this special month with my
          grandmother and strive to become a better person.
        </Content>
        <DetailHeader>Exploring Cheongja&apos;s House</DetailHeader>
        <DetailList>
          <DetailItem>
            Grandma's house, where she has resided for over 30 years, is filled
            with warm affection.
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
        <Button>Visiting Grandma Park Cheongja</Button>
        <DetailDescription>
          Reservation Dates: Aug 20th - Sept 20th | 15,000 won / 1 night
        </DetailDescription>
      </Container>
    </>
  );
};

export default ReviewPage;

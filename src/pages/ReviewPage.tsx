import styled from '@emotion/styled';
import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';

import grandma_2 from '~assets/images/grandma_2.png';
import grandma_2_1 from '~assets/images/grandma_2_1.png';
import grandma_2_2 from '~assets/images/grandma_2_2.png';
import grandma_2_3 from '~assets/images/grandma_2_3.png';
import MoveBackButton from '~components/MoveBackButton';
import ShareButton from '~components/ShareButton';

import data from '~assets/data/data.json';
import { useRecoilValue } from 'recoil';
import { FilterState } from '~store/FilterState';

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
  const navigate = useNavigate();
  const { id: idAsParam } = useParams();
  const [id, reviewIdx] = idAsParam!.split('-');

  const article = data.items.find((item) => item.id === Number(id))!;
  const review = article.reviews[Number(reviewIdx)];
  const filters = useRecoilValue(FilterState);
  return (
    <>
      <TopBar>
        <MoveBackButton />
        <ShareButton />
      </TopBar>
      <img src={`${import.meta.env.BASE_URL}/${review.url}`} alt={review.url} />
      <Container>
        <Title>{review.title}</Title>
        <Summary>{review.sub_title}</Summary>

        {review.contents.map((content) => {
            if (content.type === 'text') {
              return <Content>{content.content}</Content>
            }
            if (content.type === 'image') {
              return <img src={`${import.meta.env.BASE_URL}/${content.content}`} alt={content.content} />
            }
          })
        })}
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

export default ReviewPage;

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import data from '~assets/data/data.json';
import ChevronLeftIcon from '~assets/icons/chevron_left.svg';
import PaymentIcon from '~assets/icons/payment.svg';
import PhoneIcon from '~assets/icons/phone.svg';
import ProfileIcon from '~assets/icons/profile.svg';
import QuestionIcon from '~assets/icons/question.svg';
import grandma_1_reservation from '~assets/images/grandma_1_reservation.png';
import MoveBackButton from '~components/MoveBackButton';
import { ReservationState } from '~store/ReservationState';

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--safe-top);
  margin: 0 22px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 28px 22px 24px;
`;

const Card = styled.div`
  margin: 0 22px;
  border-radius: 30px;
  border: 0.5px solid #b8b8b8;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  padding: 12px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardContentVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const CardDescription = styled.div`
  font-size: 13px;
`;

const SettingItem = styled.div`
  display: flex;
  color: #000;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 22px;
  align-items: center;
  svg:first-of-type {
    margin-right: 12px;
  }
  svg:last-of-type {
    margin-left: auto;
    transform: rotate(180deg);
    path {
      stroke: #000000 !important;
    }
  }
`;

const None = styled.div`
  margin: 0 22px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

const ProfilePage = () => {
  const reservation = useRecoilValue(ReservationState);
  const reservedArticle =
    reservation && data.items.find((item) => item.id === reservation.id)!;
  const navigate = useNavigate();

  return (
    <>
      <TopBar>
        <MoveBackButton />
      </TopBar>
      <Title>My Trip</Title>
      {!reservedArticle && <None>None</None>}
      {reservedArticle && (
        <Card onClick={() => navigate(`/details${reservation.id}`)}>
          <img
            src={`${import.meta.env.BASE_URL}/${reservedArticle.image}`}
            alt={reservedArticle.image}
          />
          <CardContent>
            <CardContentVertical>
              <CardTitle>{reservedArticle.first_name}’s House</CardTitle>
              <CardDescription>
                {reservation.start_date} - {reservation.end_date}
              </CardDescription>
              <CardDescription>
                {reservedArticle.address}, Busan
              </CardDescription>
            </CardContentVertical>
            <PhoneIcon />
          </CardContent>
        </Card>
      )}
      <Title>Setting</Title>
      <SettingItem>
        <ProfileIcon />
        Privacy
        <ChevronLeftIcon />
      </SettingItem>
      <SettingItem>
        <PaymentIcon />
        Payment
        <ChevronLeftIcon />
      </SettingItem>
      <SettingItem>
        <QuestionIcon />
        Help Service
        <ChevronLeftIcon />
      </SettingItem>
    </>
  );
};

export default ProfilePage;

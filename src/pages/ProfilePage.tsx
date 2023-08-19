import styled from '@emotion/styled';

import ChevronLeftIcon from '~assets/icons/chevron_left.svg';
import PaymentIcon from '~assets/icons/payment.svg';
import PhoneIcon from '~assets/icons/phone.svg';
import ProfileIcon from '~assets/icons/profile.svg';
import QuestionIcon from '~assets/icons/question.svg';
import grandma_1_reservation from '~assets/images/grandma_1_reservation.png';
import MoveBackButton from '~components/MoveBackButton';

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

const ProfilePage = () => {
  return (
    <>
      <TopBar>
        <MoveBackButton />
      </TopBar>
      <Title>My Trip</Title>
      <Card>
        <img src={grandma_1_reservation} alt="grandma_1_reservation" />
        <CardContent>
          <CardContentVertical>
            <CardTitle>Oksun’s House</CardTitle>
            <CardDescription>2023.08.20-2023.09.20</CardDescription>
            <CardDescription>Busan Suyeong-gu</CardDescription>
          </CardContentVertical>
          <PhoneIcon />
        </CardContent>
      </Card>
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

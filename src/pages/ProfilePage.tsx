import styled from '@emotion/styled';

import PhoneIcon from '~assets/icons/phone.svg';
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

const ProfilePage = () => {
  return (
    <>
      <TopBar>
        <MoveBackButton />
      </TopBar>
      <Title>나의 여행</Title>
      <Card>
        <img src={grandma_1_reservation} alt="grandma_1_reservation" />
        <CardContent>
          <CardContentVertical>
            <CardTitle>.</CardTitle>
            <CardDescription>2023.08.20-2023.09.20</CardDescription>
            <CardDescription>2023.08.20-2023.09.20</CardDescription>
          </CardContentVertical>
          <PhoneIcon />
        </CardContent>
      </Card>
      <Title>환경설정</Title>
    </>
  );
};

export default ProfilePage;

import styled from '@emotion/styled';

import dongbaekjeon from '~assets/images/dongbaekjeon.png';
import MoveBackButton from '~components/MoveBackButton';

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: calc(var(--safe-top) + 32px);
  margin: 0 22px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 36px 22px 0;
`;

const TripTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 16px 22px;
`;

const Item = styled.div`
  font-size: 13px;
  font-style: normal;
  margin: 0 22px 8px;
`;

const PaymentTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: auto 22px 0;
`;

const PaymentMethod = styled.div`
  display: flex;
  margin: 20px 22px 88px;
  align-items: center;
  img {
    margin-right: 16px;
  }
`;

const Won = styled.div`
  font-size: 13px;
`;

const Edit = styled.div`
  font-size: 13px;
  font-weight: 500;
  text-decoration-line: underline;
  margin-left: auto;
`;

const Caution = styled.div`
  color: #7d7d7d;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  margin: auto 22px 0;
`;

const Button = styled.button`
  border-radius: 19px;
  background-color: #f4bb40;
  padding: 12px 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin: 34px 22px var(--safe-bottom);
`;

const ConfirmOrderPage = () => {
  return (
    <>
      <TopBar>
        <MoveBackButton />
      </TopBar>
      <Title>Confirm Trip</Title>
      <TripTitle>Oksun&apos;s House</TripTitle>
      <Item>
        Schedule: <u>2023.08.20 - 2023.09.20 / 30 nights</u>
      </Item>
      <Item>Breakfast: Seaweed soup served every morning</Item>
      <Item>Total Amount: 450,000 won (15,000 won per night)</Item>
      <PaymentTitle>Payment</PaymentTitle>
      <PaymentMethod>
        <img src={dongbaekjeon} alt="dongbaekjeon" />
        <Won>450,000 won</Won>
        <Edit>Edit</Edit>
      </PaymentMethod>
      <Caution>
        Cancellation and Refund Policy
        <br />
        - up to 30 days before check-in (~30 days): Full refund of the trip fee
        <br />
        - up to 20 days before check-in (29~20 days): Refund 90% of total price
        <br />
        - up to 6 days before check-in (19~6 days): Refund 85% of total price
        <br />
        - up to 1 day before check-in (1~5 days): Refund 80% of total price
        <br />- the day of the trip or before the tour starts: Refund 50% of
        total price
      </Caution>
      <Button>Confirm to Pay</Button>
    </>
  );
};

export default ConfirmOrderPage;

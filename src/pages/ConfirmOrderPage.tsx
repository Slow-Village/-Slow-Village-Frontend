import styled from '@emotion/styled';
import { differenceInDays, format } from 'date-fns';
import { useState, useRef } from 'react';
import Sheet from 'react-modal-sheet';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';

import data from '~assets/data/data.json';
import creditcard from '~assets/images/creditcard.png';
import dongbaekjeon from '~assets/images/dongbaekjeon.png';
import shinhancard from '~assets/images/shinhancard2.png';
import MoveBackButton from '~components/MoveBackButton';
import { FilterState } from '~store/FilterState';
import { ReservationState } from '~store/ReservationState';

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
  line-height: 16px;
  margin: 24px 22px 0;
`;

const PaymentMethod = styled.div`
  display: flex;
  margin: 20px 22px 8px;
  align-items: center;
  img {
    margin-right: 16px;
  }
`;

const Won = styled.div`
  margin-left: auto;
  font-size: 13px;
`;
const Text = styled.div`
  font-size: 13px;
  font-weight: 400;
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

const CustomSheet = styled(Sheet)`
  display: block;
`;

const ConfirmOrderPage = () => {
  const [isOpen, setOpen] = useState(false);
  const modalPointRef = useRef(null);
  const { id } = useParams();
  const article = data.items.find((item) => item.id === Number(id))!;
  const filters = useRecoilValue(FilterState);
  const setReservations = useSetRecoilState(ReservationState);
  const navigate = useNavigate();

  const handleReservation = () => {
    setOpen(false);
    setReservations({
      id: Number(id),
      start_date: format(filters.range_to, 'yyyy.MM.dd'),
      end_date: format(filters.range_to, 'yyyy.MM.dd'),
    });
    navigate('/profile');
  };

  const days = differenceInDays(filters.range_to, filters.range_from);
  const price = days * 15000;

  return (
    <>
      <TopBar>
        <MoveBackButton />
      </TopBar>
      <Title ref={modalPointRef}>Confirm Trip</Title>
      <TripTitle>{article.first_name}&apos;s House</TripTitle>
      <Item>
        Schedule:{' '}
        <u>
          {format(filters.range_from, 'yyyy. MM. dd')} -{' '}
          {format(filters.range_to, 'yyyy. MM. dd')} / {days} nights
        </u>
      </Item>
      <Item>Breakfast: Seaweed soup served every morning</Item>
      <Item>
        Total Amount: {price.toLocaleString()} won (15,000 won per night)
      </Item>
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
      <CustomSheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        mountPoint={
          modalPointRef.current !== null ? modalPointRef.current : document.body
        }
        snapPoints={[400, 0]}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <TripTitle>{price.toLocaleString()} WON</TripTitle>
            <PaymentTitle>Payment</PaymentTitle>
            <PaymentMethod onClick={() => handleReservation()}>
              <img src={dongbaekjeon} alt="dongbaekjeon" />
              <Won>{(price * 0.95).toLocaleString()} WON</Won>
              {/* <Edit>Edit</Edit> */}
            </PaymentMethod>
            <PaymentMethod onClick={() => handleReservation()}>
              <img src={shinhancard} alt="shinhancard" />
              <Won>{price.toLocaleString()} WON</Won>
              {/* <Edit>Edit</Edit> */}
            </PaymentMethod>
            <PaymentTitle>New Payment Method</PaymentTitle>
            <PaymentMethod>
              <img src={creditcard} alt="creditcard" />
              <Text>Add New Credit Card</Text>
              {/* <Won>427,500 WON</Won> */}
              {/* <Edit>Edit</Edit> */}
            </PaymentMethod>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </CustomSheet>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Confirm to Pay
      </Button>
    </>
  );
};

export default ConfirmOrderPage;

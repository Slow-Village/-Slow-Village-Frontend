import styled from '@emotion/styled';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import ChevronLeftIcon from '~assets/icons/chevron_left.svg';

const Button = styled.button`
  background-color: #f4bb40;
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  padding: 6px;
  svg {
    width: 12px;
    height: 12px;
  }
`;

const MoveBackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleClick}>
      <ChevronLeftIcon />
    </Button>
  );
};

export default memo(MoveBackButton);

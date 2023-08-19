import styled from '@emotion/styled';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import ExportIcon from '~assets/icons/export.svg';

const Button = styled.button`
  background-color: #f4bb40;
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  padding: 2.5px;
  svg {
    width: 19px;
    height: 19px;
  }
`;

const ShareButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleClick}>
      <ExportIcon />
    </Button>
  );
};

export default memo(ShareButton);

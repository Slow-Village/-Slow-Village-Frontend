import styled from '@emotion/styled';
import { memo } from 'react';

import LogoSvg from '~assets/images/logo.svg';

const Container = styled.header`
  padding: 0 80px 0 84px;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return (
    <Container>
      <LogoSvg />
    </Container>
  );
};

export default memo(Header);

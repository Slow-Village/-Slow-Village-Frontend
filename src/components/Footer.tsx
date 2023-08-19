import styled from '@emotion/styled';
import { memo } from 'react';

import LogoSvg from '~assets/images/logo.svg';

const Container = styled.footer`
  display: flex;
  align-items: flex-end;
  padding: 32px 64px;
  height: 120px;
  box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.1);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Copyright = styled.span`
  font-size: 12px;
  margin-top: 10px;
  font-weight: 300;
`;

const Footer = () => {
  return (
    <Container>
      <LeftContainer>
        <LogoSvg />
        <Copyright>© 2023 Slow Village.</Copyright>
      </LeftContainer>
    </Container>
  );
};

export default memo(Footer);

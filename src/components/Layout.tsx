import styled from '@emotion/styled';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '~components/Footer';
import Header from '~components/Header';

const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 48px 64px;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default memo(Layout);

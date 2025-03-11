import styled from "styled-components";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  background-color: var(--color-grey-50);
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  line-height: 1;
  font-weight: 400;
  color: #555;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;

import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import Logo from "../Reuseable/Logo";
import HeaderUserMenu from "./HeaderUserMenu";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
      <Logo />
      <HeaderUserMenu />
    </StyledHeader>
  );
}

export default Header;

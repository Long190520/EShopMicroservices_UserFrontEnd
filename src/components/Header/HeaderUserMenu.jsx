import {
  HiMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import styled from "styled-components";

import ButtonIcon from "../Reuseable/ButtonIcon";
import { useNavigate } from "react-router-dom";

const StyledHeaderUserMenu = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

function HeaderUserMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderUserMenu>
      <li>
        <ButtonIcon>
          <HiMagnifyingGlass />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUserCircle />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/cart")}>
          <HiOutlineShoppingCart />
        </ButtonIcon>
      </li>
    </StyledHeaderUserMenu>
  );
}

export default HeaderUserMenu;

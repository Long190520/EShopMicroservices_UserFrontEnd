import styled from "styled-components";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 2rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>Sản phẩm mới</li>
      <li>Sản phẩm bán chạy</li>
      <li>Bộ sưu tập</li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;

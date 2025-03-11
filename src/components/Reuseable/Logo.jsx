import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.a`
  text-align: center;
  cursor: pointer;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const navigate = useNavigate();

  return (
    <StyledLogo onClick={() => navigate("/")}>
      <Img src="/logo.png" />
    </StyledLogo>
  );
}

export default Logo;

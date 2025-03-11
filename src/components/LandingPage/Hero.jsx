import styled from "styled-components";
import Button from "../Reuseable/Button";

// Styled Components
const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/hero.jpg");
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 2rem;
`;

const HeroContainer = styled.div`
  z-index: 2;
  max-width: 130rem;
  margin: 0 auto;
  padding: 30rem 3.2rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--backdrop-color);
  backdrop-filter: blur(4px);
  transition: all 0.5s;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

function Hero() {
  return (
    <HeroSection>
      <Overlay />
      <HeroContainer>
        <Title>Welcome to Our Platform</Title>
        <Subtitle>Discover amazing products and services</Subtitle>
        <Button>Get Started</Button>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;

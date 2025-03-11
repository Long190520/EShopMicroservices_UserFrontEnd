import styled from "styled-components";

const CategorySection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4.8rem 0;
`;

const Title = styled.p`
  padding: 5rem;
  color: #000;
  font-size: 5rem;
  font-weight: 600;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

const CategoryCard = styled.div`
  position: relative; /* Added for ::before to work */
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  width: 100%;
  height: 200px; /* Adjust based on your design */

  &::before {
    content: "";
    background: rgb(var(--color-grey-500));
    border-radius: inherit;
    z-index: 1;
    pointer-events: none;
    transition: background 0.2s ease-in-out; /* Fixed typo */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Category() {
  return (
    <CategorySection>
      <Title>Category</Title>
      <CategoryList>
        <CategoryCard>
          <img src="/Category/IPhone.jpg" alt="Category" />
        </CategoryCard>
        <CategoryCard>
          <img src="/Category/IPhone.jpg" alt="Category" />
        </CategoryCard>
        <CategoryCard>
          <img src="/Category/IPhone.jpg" alt="Category" />
        </CategoryCard>
        <CategoryCard>
          <img src="/Category/IPhone.jpg" alt="Category" />
        </CategoryCard>
        <CategoryCard>
          <img src="/Category/IPhone.jpg" alt="Category" />
        </CategoryCard>
        <CategoryCard>
          <img src="/Category/IPhone.jpg" alt="Category" />
        </CategoryCard>
      </CategoryList>
    </CategorySection>
  );
}

export default Category;

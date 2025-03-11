import styled from "styled-components";
import sampleImage from "/sample.jpg"; // Example image

const Card = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  background: #fff;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #e44d26;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #ff4757;
  }
`;

function ProductCard({ product }) {
  const { name, description, imageFile, price } = product;

  return (
    <Card>
      <ProductImage src={imageFile || sampleImage} alt={name} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Card>
  );
}

export default ProductCard;

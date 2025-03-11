import styled from "styled-components";
import useProducts from "./useProducts";
import ProductCard from "./ProductCard";
import Spinner from "../Reuseable/Spinner";
import Empty from "../Reuseable/Empty";

const ProductSection = styled.section`
  padding: 6.4rem 0;
`;

const Title = styled.p`
  padding: 5rem;
  color: #000;
  font-size: 5rem;
  font-weight: 600;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

function Products() {
  const { isLoading, products } = useProducts();

  if (isLoading) return <Spinner />;
  if (!products.length) return <Empty resourceName="products" />;

  return (
    <ProductSection>
      <Title>New Products</Title>
      <ProductList>
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </ProductList>
    </ProductSection>
  );
}

export default Products;

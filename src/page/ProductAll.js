import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import ProductCard from '../component/ProductCard';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const ProductAll = () => {
  let [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let keyword = query.get("q") || "";
    console.log('쿼리값 : ', keyword);
    let url = `https://my-json-server.typicode.com/jiba07/jiba-hnm/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
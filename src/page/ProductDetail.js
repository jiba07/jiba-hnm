import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jiba07/jiba-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('dddd', data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, [])
  
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col className='product'>
          <div className='product-title'>{product?.title}</div>
          <div className='product-price'>{product?.price}</div>
          <div className='conscious-choice'>{product && product.choice == true ? 'Conscious choice' : ''}</div>
          <Dropdown className='size-button'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button type='submit'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail

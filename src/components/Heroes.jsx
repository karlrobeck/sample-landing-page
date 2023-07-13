import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import phone from "../assets/phone.png"

const Heroes = () => {
  return (
    <Container className='py-5'>
        <Row className='d-flex align-items-center'>
            <Col>
                <h1 className='display-6 fw-bold'>
                    A Great App Makes Your Life Better
                </h1>
                <p className="lead">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </Col>
            <Col className='d-flex justify-content-center'>
                <img className='img-fluid' width={350} src={phone} alt="" />
            </Col>
        </Row>
    </Container>
  )
}

export default Heroes
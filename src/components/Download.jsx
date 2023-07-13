import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import phone5 from '../assets/phone5.png'

const Download = () => {
  return (
    <Container>
        <Row className='d-flex align-items-center'>
            <Col>
                <h6 className='display-6 fw-bold'>
                    Download App Now
                </h6>
                <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
                <div className='d-flex gap-2'>
                    <Button variant='success'>
                        GET IT ON GOOGLE PLAY
                    </Button>
                    <Button variant='secondary'>
                        GET IT ON THE APPLE STORE
                    </Button>
                </div>
            </Col>
            <Col>
                <img src={phone5} alt="" />
            </Col>
        </Row>
    </Container>
  )
}

export default Download 
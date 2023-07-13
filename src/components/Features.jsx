import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import phone3 from '../assets/phone3.png'

const Features = () => {
  return (
    <Container className='d-flex flex-column gap-5 py-5'>
        <div className='text-center'>
            <h3>App Features</h3>
            <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
        </div>
        <div className='text-center'>
            <h3>Full Free Chat</h3>
            <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <Row>
            <Col className='py-5 d-flex flex-column justify-content-between align-items-center'>
                <div>
                    <h4>Unlimited Features</h4>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                </div>
                <div>
                    <h4>awesome ui design</h4>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                </div>
            </Col>
            <Col>
                <img className='img-fluid' src={phone3} alt="" />
            </Col>
            <Col className='py-5 d-flex flex-column justify-content-between align-items-center'>
                <div>
                    <h4>iso & android version</h4>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                </div>
                <div>
                    <h4>retina ready graphics</h4>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                </div>
            </Col>
        </Row>
        <div className='text-center'>
            <h4>
            24/7 support by real pepole
            </h4>
            <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </small>
        </div>
    </Container>
  )
}

export default Features
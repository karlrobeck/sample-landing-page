import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import phone2 from '../assets/phone2.png'

const About = () => {
  return (
    <Container>
        <div className='py-5'>
            <h2 className='text-center'>
                About our app
            </h2>
            <p className="lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>    
        </div>
        <Row className='d-flex align-items-center'>
            <Col className='d-flex justify-content-center'>
                <img className='img-fluid' width={350} src={phone2} alt="" />
            </Col>
            <Col className='d-flex flex-column gap-5'>
                <div>
                    <div className='display-6 fw-bold'>
                       Creative Design 
                    </div>
                    <p className='lead fs-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                    </p>
                </div>
                <div>
                    <div className='display-6 fw-bold'>
                       Easy to use
                    </div>
                    <p className='lead fs-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                    </p>
                </div>
                <div>
                    <div className='display-6 fw-bold'>
                       Best User Experience
                    </div>
                    <p className='lead fs-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default About
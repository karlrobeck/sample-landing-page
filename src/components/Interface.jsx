import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import phone4 from '../assets/phone4.png'
import leftIcon from '../assets/Left Icon.png'
import rightIcon from '../assets/Right Icon.png'
import slider from '../assets/Slider.png'

const Interface = () => {
  return (
    <Container className='d-flex flex-column gap-5'>
        <div className='text-center'>
            <h5 className='display-6 fw-bold'>Checkout Our App Interface Look</h5>
            <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <img width={40} height={40} src={leftIcon} alt="" />
            <img src={phone4} width={600} alt="" />
            <img width={40} height={40} src={rightIcon} alt="" />
        </div>
        <div className='text-center'>
            <img width={100} src={slider} alt="" />
        </div>
    </Container>
  )
}

export default Interface
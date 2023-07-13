import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Container className='py-2'>
        <Navbar className='d-flex justify-content-between'>
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        About
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Features
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Navbar.Brand className='fw-bold'>
                My Website
            </Navbar.Brand>
            <Nav className='d-flex gap-3'>
                <Nav.Item>
                    <Nav.Link>
                        Screenshot
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Blog
                    </Nav.Link>
                </Nav.Item>
                <Button>
                    Download
                </Button>
            </Nav>
        </Navbar>
    </Container>
  )
}

export default Header
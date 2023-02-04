import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTitle } from 'react-use'
import { useCurrentPath } from '../hooks/use-current-path'
import { useRouter } from '../hooks/use-router'
import { appPages } from '../pages/TagAppPages'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
const Menu = () => {
  const { location, pathname, push } = useRouter()

  const temp = appPages.find(
    ({ url, title }) => useCurrentPath(url, location) && { title }
  )
  useTitle(`Kreisler | ${temp?.title}`)
  useEffect(() => {
    !temp && push('/')
  }, [temp])
  return (
    <>

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#/">Kreisler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {appPages.map(({ url, title }, index) => {
              return <Nav.Link className={pathname === url ? 'active' : ''} key={index} href={'#' + url}>{title}</Nav.Link>
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu

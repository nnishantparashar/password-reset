import './Header.css'
import logo from '../../home.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Header = () =>{
    return (
        <div className='header'>
            <Navbar className="bg-body-success">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top fw-bold"
            />{' '}
            Password Reset App
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}


export default Header;
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { SessionContext } from '../../../App';

const LoginForm = () => {

  const { setIsLoggedIn } = useContext(SessionContext)

  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const API = "https://password-reset-mjhd.onrender.com/login";

  const emailHandler = (e) =>{
    setEmail(e.target.value)
  }

  const passwordHandler = (e) =>{
    setPassword(e.target.value)
  }
  const loginData = {
    'email': email,
    'password': password
 }

  const loginHandler = async () => {
    
    return fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
        
        .then(data => data.json())
        .then((result) =>{
          alert(result.message);
          if(result.message === 'User logged-in successfully.'){
            setIsLoggedIn(true);
            navigate("/");
          }
        })
        
    
  }
  return (
    <div>
      <div className="heading">
        <h3>User Login</h3>
      </div>
      <div className="form">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email : 
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" onChange={(e) => emailHandler(e)} placeholder="abc@xmail.com" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" onChange={(e) => passwordHandler(e)} placeholder="Password" />
            </Col>
          </Form.Group>
          <Button onClick={loginHandler} variant="primary">Submit</Button>{" "}
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

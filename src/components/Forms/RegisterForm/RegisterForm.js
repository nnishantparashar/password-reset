import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./RegisterForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  let navigate = useNavigate();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const mobileChangeHandler = (event) => {
    setMobile(event.target.value);
  }

  const registrationData = {
    'name': name,
    'email': email,
    'password': password,
    'mobileNumber': mobile
  }

  const API = "https://password-reset-mjhd.onrender.com/register"; 
const registrationHandler = () => {
  return fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registrationData)
  })
    
    .then(data => data.json())
    .then((result) =>{
      alert(result.message);
      if(result.message === 'User has been registered successfully'){
        navigate("/");
      }
    })
  
}

  return (
    <div>
      <div className="heading">
        <h3>Register User</h3>
      </div>
      <div className="form">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="2">
              Name :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" onChange={nameChangeHandler} placeholder="John Doe" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="2">
              Email :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" onChange={emailChangeHandler} placeholder="abc@xmail.com" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="2">
              Password :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" onChange={passwordChangeHandler} placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="2">
              Mobile :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number"  onChange={mobileChangeHandler} placeholder="9873.." />
            </Col>
          </Form.Group>
          <Button onClick={registrationHandler} variant="primary">Submit</Button>{" "}
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;

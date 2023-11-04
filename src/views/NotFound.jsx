import { Container } from "react-bootstrap";
import  error  from '../assets/error.jpg';

export default () => {
  return (
    <Container className="pt-5">
        <br />
        <img src={error} className="logo" alt="error" />   
        <br />
    </Container>
    
  );
};
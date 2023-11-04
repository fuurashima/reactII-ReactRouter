import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <Container className="pt-5">
      <div ClassName = "pt-6"><h3> Por favor, ingrese sus datos y muy pronto nos comunicaremos con usted.</h3>
      </div>
      <br></br>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="Nombres">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="Juan Alfredo" />
        </Form.Group>

        <Form.Group as={Col} controlId="Apellidos">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Perez Rodriguez" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="direccion">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="San Isidro 10" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="number" placeholder="+569xxxxxxx" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="usuario@dominio.cl" />
      </Form.Group>
      

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>

    <br />

    
    </Container>
  );
};

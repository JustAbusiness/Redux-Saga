import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
function ButtonComponent() {
  return (
    <div>
      <Container>
        <Button variant="warning">Edit</Button>{" "}
        <Button variant="danger">Delete</Button>{" "}
      </Container>
    </div>
  );
}

export default ButtonComponent;

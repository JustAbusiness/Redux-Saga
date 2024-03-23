import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Header() {
  const [mode, setMode] = useState<string>("light");


  return (
    <div>
      <Navbar className="bg-body-tertiary mb-2" data-bs-theme={mode}>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Form>
            <Form.Check
              value={mode}
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
              type="switch"
              id="custom-switch"
              label={ mode === "light" ? <Navbar.Text>Light Mode </Navbar.Text> : <Navbar.Text>Dark Mode </Navbar.Text>}
            />
          </Form>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

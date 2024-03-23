import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { changeMode } from "../redux/app/app.slide";

function Header() {
  const mode = useAppSelector((state) => state.app.mode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.setAttribute("data-bs-theme", mode);
    }
  }, [mode])

  return (
    <div>
      <Navbar className="bg-body-tertiary mb-2" data-bs-theme={mode}>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Form>
            <Form.Check
              defaultChecked={mode === "light" ? false : true}
              onChange={(e) =>
                dispatch(changeMode(e.target.checked ===  true ? "dark": "light"))
              }
              type="switch"
              id="custom-switch"
              label={
                mode === "light" ? (
                  <Navbar.Text>Light Mode </Navbar.Text>
                ) : (
                  <Navbar.Text>Dark Mode </Navbar.Text>
                )
              }
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

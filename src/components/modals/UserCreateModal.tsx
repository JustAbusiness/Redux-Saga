import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { createNewUser, resetCreate } from "../../redux/user/user.slide";

function UserCreateModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const isCreateSuccess = useAppSelector((state) => state.user.isCreateSuccess);
  useEffect(() => {
      if (isCreateSuccess) {
        setEmail("");
        setName("");
        handleClose();
        // reset redux
        dispatch(resetCreate());
      }
  },[isCreateSuccess]);
  
  const handleSubmit = () => {
    if (!email) {
      alert("Email is required");
    } else if (!name) {
      alert("Name is required");
    } else {
      dispatch(createNewUser({ email, name }));
      handleClose();
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ngoc Huy"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserCreateModal;

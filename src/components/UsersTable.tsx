import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fecthListUsers } from "../redux/user/user.slide";
import { Bounce, toast } from "react-toastify";
import ButtonComponent from "./ButtonComponent";
import UserCreateModal from "./modals/UserCreateModal";

function UsersTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.listUsers);

  useEffect(() => {
    dispatch(fecthListUsers());
    // toast("🦄 Wow so easy!", { transition: Bounce });
  }, []);

  return (
    <>
    <UserCreateModal />
    <Table striped bordered hover className="mt-5">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><ButtonComponent /></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default UsersTable;

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UsersTable from './UsersTable';
function TableContent() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="user" title="Users">
        <UsersTable/>
      </Tab>
      <Tab eventKey="blog" title="Blogs">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
}

export default TableContent;

import { useState, useEffect } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Image,
} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

import "./Dashboard.css";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("User Management");
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedUserRole, setSelectedUserRole] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSetRole = (userId) => {
    setSelectedRole(userId);
  };

const handleRoleSelection = async (role) => {
  if (!selectedRole) {
    console.error("No user selected");
    return;
  }

  setSelectedUserRole(role);
  console.log(`Set role ${role} for user ${selectedRole}`);

  try {
    // Update user role on the server
    await axios.put(
      `https://assignment-12-client-side-server-dev-sabbir194.vercel.app/register/${selectedRole}/role`,
      {
        role: role,
      }
    );

    console.log(`Updated role for user ${selectedRole}`);

    // Update the users state by mapping through the users and updating the role for the selected user
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === selectedRole ? { ...user, role: role } : user
      )
    );

    setSelectedRole("");
  } catch (error) {
    console.error(`Error updating role for user ${selectedRole}:`, error);
  }
};


  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://assignment-12-client-side-server-dev-sabbir194.vercel.app/register/${userId}`
          );
          console.log(`Deleted user ${userId}`);
          // Update the users state by filtering out the deleted user
          setUsers(users.filter((user) => user._id !== userId));
          Swal.fire("Deleted!", "The user has been deleted.", "success");
        } catch (error) {
          console.error(`Error deleting user ${userId}:`, error);
        }
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://assignment-12-client-side-server-dev-sabbir194.vercel.app/register"
        );
        const userData = response.data;
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fluid style={{ marginTop: "83px" }}>
      <Row>
        <Col md={2} className="sidebar">
          <div className="admin-name">Admin</div>
          <ul className="sidebar-options">
            <li
              className={selectedOption === "User" ? "active" : ""}
              onClick={() => handleOptionClick("User")}
            >
              User
            </li>
            <li
              className={selectedOption === "User Management" ? "active" : ""}
              onClick={() => handleOptionClick("User Management")}
            >
              User Management
            </li>
            <li
              className={selectedOption === "Option 1" ? "active" : ""}
              onClick={() => handleOptionClick("Option 1")}
            >
              Option 1
            </li>
            <li
              className={selectedOption === "Option 2" ? "active" : ""}
              onClick={() => handleOptionClick("Option 2")}
            >
              Option 2
            </li>
            <li
              className={selectedOption === "Option 3" ? "active" : ""}
              onClick={() => handleOptionClick("Option 3")}
            >
              Option 3
            </li>
          </ul>
        </Col>

        <Col md={10} className="content">
          <Row className="mt-4">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    User: <span>{users.length}</span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Instructor</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Student</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            {selectedOption === "User" && (
              <Col md={12}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>User Profile</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>
                          <Image
                            src={user.photoURL}
                            alt="User"
                            roundedCircle
                            height="30"
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            )}
          </Row>

          <Row className="mt-4">
            {selectedOption === "User Management" && (
              <Col md={12}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>
                          <Image
                            src={user.photoURL}
                            alt="User"
                            roundedCircle
                            height="30"
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <div className="action-icons">
                            {user.role !== "admin" && (
                              <Button
                                variant="light"
                                onClick={() => handleRoleSelection("admin")}
                                disabled={selectedRole === user._id}
                              >
                                <GrUserAdmin />
                              </Button>
                            )}
                            {user.role !== "instructor" && (
                              <Button
                                variant="light"
                                onClick={() =>
                                  handleRoleSelection("instructor")
                                }
                                disabled={selectedRole === user._id}
                              >
                                <GiTeacher />
                              </Button>
                            )}
                            <Button
                              variant="danger"
                              onClick={() => handleDeleteUser(user._id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

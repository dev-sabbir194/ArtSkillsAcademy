import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Dropdown,
  Form,
} from "react-bootstrap";
import "./InstructorDashboard.css";

const Instructor = () => {
  const [selectedOption, setSelectedOption] = useState("User");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container fluid style={{ marginTop: 50 }}>
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
          <div className="dashboard-content">
            {selectedOption === "User" ? (
              <div className="section">
                <h2>User Details</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>jane@example.com</td>
                    </tr>
                    {/* Add more rows for additional users */}
                  </tbody>
                </Table>
              </div>
            ) : selectedOption === "User Management" ? (
              <div className="section">
                <h2>User Management</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john@example.com</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="primary"
                            id="set-role-dropdown"
                          >
                            Set Role
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Admin</Dropdown.Item>
                            <Dropdown.Item>Instructor</Dropdown.Item>
                            <Dropdown.Item>Student</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                      <td>
                        <Button variant="danger">Delete User</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>jane@example.com</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="primary"
                            id="set-role-dropdown"
                          >
                            Set Role
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Admin</Dropdown.Item>
                            <Dropdown.Item>Instructor</Dropdown.Item>
                            <Dropdown.Item>Student</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                      <td>
                        <Button variant="danger">Delete User</Button>
                      </td>
                    </tr>
                    {/* Add more rows for additional users */}
                  </tbody>
                </Table>
              </div>
            ) : selectedOption === "Option 1" ? (
              <div className="section">
                <h2>Option 1</h2>
                <Form>
                  <Form.Group controlId="className">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter class name" />
                  </Form.Group>
                  <Form.Group controlId="classImage">
                    <Form.Label>Class Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter class image URL"
                    />
                  </Form.Group>
                  <Form.Group controlId="instructorName">
                    <Form.Label>Instructor Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter instructor name"
                    />
                  </Form.Group>
                  <Form.Group controlId="instructorEmail">
                    <Form.Label>Instructor Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter instructor email"
                    />
                  </Form.Group>
                  <Form.Group controlId="availableSeats">
                    <Form.Label>Available Seats</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter available seats"
                    />
                  </Form.Group>
                  <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Add
                  </Button>
                </Form>
              </div>
            ) : (
              <div className="section">
                <h2>{selectedOption}</h2>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Instructor;

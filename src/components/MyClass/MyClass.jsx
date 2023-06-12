import { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./MyClass.css";

const MyClass = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch(
          "https://assignment-12-client-side-server.vercel.app/classes/"
        );
        const data = await response.json();
        const selectedClass = data.find((classItem) => classItem._id === id);
        if (selectedClass) {
          setClassData([selectedClass]);
        }
      } catch (error) {
        console.log("Error fetching class data:", error);
      }
    };

    fetchClassData();
  }, [id]);

  return (
    <div className="" style={{ marginTop: "120px" }}>
      <Row className="mt-4">
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Class ID</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {classData.map((classItem) => (
                <tr key={classItem._id}>
                  <td>{classItem._id}</td>
                  <td>{classItem.Name}</td>
                  <td>{classItem.Description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default MyClass;

import React, { useState } from "react";
import styled from "styled-components";

const RegistrationList = styled.ul`
  padding: 0;
`;

const RegistrationItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StudentRegistrations = () => {
  const [studentName, setStudentName] = useState("");
  const [selectedOffering, setSelectedOffering] = useState("");
  const [registrations, setRegistrations] = useState([]);

  const addRegistration = () => {
    if (studentName.trim() && selectedOffering) {
      setRegistrations([
        ...registrations,
        { id: Date.now(), studentName, offering: selectedOffering },
      ]);
      setStudentName("");
      setSelectedOffering("");
    }
  };

  return (
    <div>
      <h2>Student Registrations</h2>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Student Name"
      />
      <select
        onChange={(e) => setSelectedOffering(e.target.value)}
        value={selectedOffering}
      >
        <option value="">Select Offering</option>
        <option value="Individual - English">Individual - English</option>
        <option value="Group - Hindi">Group - Hindi</option>
        <option value="Special - Urdu">Special - Urdu</option>
      </select>
      <button onClick={addRegistration}>Register</button>
      <RegistrationList>
        {registrations.map((registration) => (
          <RegistrationItem key={registration.id}>
            {registration.studentName} - {registration.offering}
          </RegistrationItem>
        ))}
      </RegistrationList>
    </div>
  );
};

export default StudentRegistrations;

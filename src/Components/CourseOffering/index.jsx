import React, { useState } from "react";
import styled from "styled-components";
const OfferingList = styled.ul`
  padding: 0;
`;
const OfferingItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CourseOfferings = () => {
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const addCourseOffering = () => {
    if (selectedCourse && selectedCourseType) {
      setCourseOfferings([
        ...courseOfferings,
        {
          id: Date.now(),
          course: selectedCourse,
          courseType: selectedCourseType,
        },
      ]);
    }
  };
  const deleteCourseOffering = (id) => {
    setCourseOfferings(
      courseOfferings.filter((offering) => offering.id !== id)
    );
  };
  const updateCourseOffering = (id, newCourse, newCourseType) => {
    setCourseOfferings(
      courseOfferings.map((offering) =>
        offering.id === id
          ? { ...offering, course: newCourse, courseType: newCourseType }
          : offering
      )
    );
  };
  return (
    <div>
      <h2>Course Offerings</h2>
      <select
        onChange={(e) => setSelectedCourse(e.target.value)}
        value={selectedCourse}
      >
        <option value="">Select Course</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Urdu">Urdu</option>
      </select>
      <select
        onChange={(e) => setSelectedCourseType(e.target.value)}
        value={selectedCourseType}
      >
        <option value="">Select Course Type</option>
        <option value="Individual">Individual</option>
        <option value="Group">Group</option>
        <option value="Special">Special</option>
      </select>
      <button onClick={addCourseOffering}>Add Offering</button>
      <OfferingList>
        {courseOfferings.map((offering) => (
          <OfferingItem key={offering.id}>
            {offering.course} - {offering.courseType}
            <div>
              <button onClick={() => deleteCourseOffering(offering.id)}>
                Delete
              </button>
              <button
                onClick={() =>
                  updateCourseOffering(
                    offering.id,
                    prompt("New course:", offering.course),
                    prompt("New course type:", offering.courseType)
                  )
                }
              >
                Update
              </button>
            </div>
          </OfferingItem>
        ))}
      </OfferingList>
    </div>
  );
};
export default CourseOfferings;

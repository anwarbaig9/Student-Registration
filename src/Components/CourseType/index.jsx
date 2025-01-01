import React, { useState } from "react";
import styled from "styled-components";

const CourseTypeList = styled.ul`
  padding: 0;
`;

const CourseTypeItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CourseTypes = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courseTypeName, setCourseTypeName] = useState("");

  const addCourseType = () => {
    if (courseTypeName.trim()) {
      setCourseTypes([
        ...courseTypes,
        { id: Date.now(), name: courseTypeName },
      ]);
      setCourseTypeName("");
    }
  };

  const deleteCourseType = (id) => {
    setCourseTypes(courseTypes.filter((courseType) => courseType.id !== id));
  };

  const updateCourseType = (id, newName) => {
    setCourseTypes(
      courseTypes.map((courseType) =>
        courseType.id === id ? { ...courseType, name: newName } : courseType
      )
    );
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input
        type="text"
        value={courseTypeName}
        onChange={(e) => setCourseTypeName(e.target.value)}
        placeholder="New course type"
      />
      <button onClick={addCourseType}>Add Course Type</button>
      <CourseTypeList>
        {courseTypes.map((courseType) => (
          <CourseTypeItem key={courseType.id}>
            {courseType.name}
            <div>
              <button onClick={() => deleteCourseType(courseType.id)}>
                Delete
              </button>
              <button
                onClick={() =>
                  updateCourseType(
                    courseType.id,
                    prompt("New name:", courseType.name)
                  )
                }
              >
                Update
              </button>
            </div>
          </CourseTypeItem>
        ))}
      </CourseTypeList>
    </div>
  );
};

export default CourseTypes;

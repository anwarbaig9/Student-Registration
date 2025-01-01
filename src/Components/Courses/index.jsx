import React, { useState } from "react";
import styled from "styled-components";

const CourseList = styled.ul`
  padding: 0;
`;

const CourseItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");

  const addCourse = () => {
    if (courseName.trim()) {
      setCourses([...courses, { id: Date.now(), name: courseName }]);
      setCourseName("");
    }
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const updateCourse = (id, newName) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, name: newName } : course
      )
    );
  };

  return (
    <div>
      <h2>Courses</h2>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="New course"
      />
      <button onClick={addCourse}>Add Course</button>
      <CourseList>
        {courses.map((course) => (
          <CourseItem key={course.id}>
            {course.name}
            <div>
              <button onClick={() => deleteCourse(course.id)}>Delete</button>
              <button
                onClick={() =>
                  updateCourse(course.id, prompt("New name:", course.name))
                }
              >
                Update
              </button>
            </div>
          </CourseItem>
        ))}
      </CourseList>
    </div>
  );
};

export default Courses;

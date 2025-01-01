import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import CourseOfferings from "./Components/CourseOffering";
import Courses from "./Components/Courses";
import CourseTypes from "./Components/CourseType";
import StudentRegistrations from "./Components/StudentRegistration";

const AppWrapper = styled.div`
  font-family: "Arial", sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    padding: 10px 20px;
    background-color: #4caf50;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <GlobalStyle />
        <Header>
          <h1>Course Management System</h1>
        </Header>
        <Navigation>
          <a href="/">Courses</a>
          <a href="/course-offerings">Course Offerings</a>
          <a href="/course-types">Course Types</a>
          <a href="/student-registrations">Student Registrations</a>
        </Navigation>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/course-offerings" element={<CourseOfferings />} />
          <Route path="/course-types" element={<CourseTypes />} />
          <Route
            path="/student-registrations"
            element={<StudentRegistrations />}
          />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;

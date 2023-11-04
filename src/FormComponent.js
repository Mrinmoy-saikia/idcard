import React, { useState } from "react";
import "./Component.css";

function FormComponent() {
  const [name, setName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [course, setCourse] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can use the state variables to generate the ID card here or make an API call.
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Enter Student Details</h2>
        <form id="idCardForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Full Name:</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter College Name:</label>
            <input
              type="text"
              id="email"
              required
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">Enter Student ID:</label>
            <input
              type="text"
              id="studentId"
              required
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Enter Course:</label>
            <input
              type="text"
              id="course"
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Enter Student's Photo:</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              required
              onChange={handlePhotoChange}
            />
            <p id="photoName">{photo ? photo.name : ""}</p>
          </div>
          <button type="submit">Generate Card</button>
        </form>
      </div>
      <div className="right-panel">
        <div className="id-card-container">
          <div className="photo-container">
            <div className="photo" id="idCardPhoto">
              {photo && <img src={URL.createObjectURL(photo)} alt="Student" />}
            </div>
          </div>
          <div className="student-info">
            <h2 id="idCardName">{name}</h2>
            <p id="idCardEmail">{collegeName}</p>
            <p id="idCardStudentId">{studentId}</p>
            <p id="idCardCourse">{course}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;

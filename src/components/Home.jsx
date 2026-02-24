import React from "react";

const Home = ({ formData }) => {
  return (
    <>
      <div className="formWrapper">
        <h2>Summary</h2>
        <p>Name: {formData.fullName}</p>
        <p>Email: {formData.email}</p>
        <p>Role: {formData.role}</p>
        <p>Agreed: {formData.agree ? "Yes" : "No"}</p>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

const FormFirstPage = ({ form, setForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleNext = () => {
    console.log(form.fullName);

    if (!String(form.fullName).trim()) return;
    if (!form.email.trim()) return;
    navigate("/step2");
  };
  const isFormValid =
    typeof form.fullName === "string" &&
    form.fullName.trim().length > 0 &&
    form.email.trim() !== "";

  return (
    <>
      <div className="inputWrapper">
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Enter you fullname"
          onChange={handleChange}
          value={form.fullName}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          value={form.email}
        />
        <button
          disabled={!isFormValid}
          onClick={handleNext}
          className="btnClass"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FormFirstPage;

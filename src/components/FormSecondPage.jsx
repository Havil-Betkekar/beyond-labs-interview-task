import React from "react";
import { useNavigate } from "react-router-dom";

const FormSecondPage = ({ form, setForm }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const isFormValid =
    typeof form.role === "string" &&
    form.role.length > 0 &&
    form.agree === true;
  const handleSubmit = () => {
    if (!isFormValid) return;
    console.log("Submitted data:", form);
    navigate("/home");
  };
  return (
    <>
      <div className="secondWrapper">
        <div className="inputAlignment">
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="optionClass"
          >
            <option value="">Select any one role</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          <br />
          <span>Accept Terms & Conditions</span>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            onChange={handleChange}
            checked={form.agree}
          />
        </div>
        <rbr />
        <div className="btnWrapper">
          <button onClick={() => navigate("/")} className="btnClass">
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="btnClass"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default FormSecondPage;

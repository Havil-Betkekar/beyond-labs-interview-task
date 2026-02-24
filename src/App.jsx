import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FormFirstPage from "./components/FormFirstPage";
import { useState } from "react";
import FormSecondPage from "./components/FormSecondPage";
import Home from "./components/Home";
function App() {
  const [form, setform] = useState({
    fullName: "",
    email: "",
    role: "",
    agree: "",
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<FormFirstPage form={form} setForm={setform} />}
          />
          <Route
            path="/step2"
            element={<FormSecondPage form={form} setForm={setform} />}
          />
          <Route path="/home" element={<Home formData={form} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/UserForm";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/rich-text-editor" element={<RichTextEditor />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/dashboard"
          element={
            
              <Dashboard />
  
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

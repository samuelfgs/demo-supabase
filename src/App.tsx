import React from "react";
import Homepage from "./components/Homepage";
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PLASMIC } from './plasmic-init';
import LoginPage from "./components/LoginPage";
import AddPost from "./components/AddPost";
import Mountain from "./components/Mountain";
import PostUpdate from "./components/PostUpdate";
import SignupPage from "./components/SignupPage";

function Index() {
  return (
    PLASMIC &&
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/signup-page" element={<SignupPage />} />
        <Route path="/post/add" element={<AddPost />} /> 
        <Route path="/post/update/id" element={<PostUpdate />} /> 
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
      </Routes>
    </Router>
  );
}

export default Index;
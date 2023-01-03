import React from 'react';
import { BrowserRouter, Route, Routes, Rot, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar_component"
import ExercisesList from "./components/exercises-list_component";
import EditExercise from "./components/edit-exercise_component";
import CreateExercise from "./components/create-exercise_component.js";
import CreateUser from "./components/create-user_component.js";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<ExercisesList />} />
            <Route path="edit/:id" element={<EditExercise />} />
            <Route path="create" element={<CreateExercise />} />
            <Route path="user" element={<CreateUser />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

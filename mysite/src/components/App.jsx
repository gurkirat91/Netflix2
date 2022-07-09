import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import SignIn from "./SignIn";
import Register from "./Register";
import Movie from "./Movie";

function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/register" element={<Register/>}/>   
      {/* change the name of register in Server app.post */}
      <Route path="/movies" element={<Movie/>}/>

    </Routes>
    </div>
    </Router>
  );
}

export default App;

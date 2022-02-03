import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import New from "./Components/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  
const App=()=>  {

  const apiKey=process.env.REACT_APP_NEWS_API_KEY;
   
    return (
      <div>
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<New key={"general"} pageSize={18} apiKey={apiKey} country={"in"} category="general"/>}></Route>
            <Route exact path="/business" element={<New key={"business"} pageSize={18} apiKey={apiKey} country={"in"} category="business"/>}></Route>
            <Route exact path="/entertainment" element={<New key={"entertainment"} pageSize={18} apiKey={apiKey} country={"in"} category="entertainment"/>} ></Route>
            <Route exact path="/health" element={<New key={"health"} pageSize={18} apiKey={apiKey} country={"in"} category="health"/>}></Route>
            <Route exact path="/science" element={<New key={"science"} pageSize={18} apiKey={apiKey} country={"in"} category="science"/>}></Route>
            <Route exact path="/sports" element={<New key={"sports"} pageSize={18} apiKey={apiKey} country={"in"} category="sports"/>}></Route>
            <Route exact path="/technology" element={<New key={"technology"} pageSize={18} apiKey={apiKey} country={"in"} category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    );
 }

 export default App;

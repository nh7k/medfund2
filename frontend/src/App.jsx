import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home1 from "./home/Home1";
import Work3 from "./component/Work3";
import Login from "./component/Login";
import Document from "./component/Document";

import DonationCard from "./component/DonationCard";
import Donation from "./component/Donation";
import Work8 from "./component/Work8";

function App() {
  return (
    <>
       {/* Route-based Components */}
       <Routes>
       <Route path="/" element={<Home1 />} />
       <Route path="/Login" element={<Login/>} />
       <Route path="/Work3" element={<Work3 />} />
       <Route path="/Donation" element={<Donation/>} />
       <Route path="/DonationCard" element={<DonationCard />} />
       <Route path="/Work8" element={<Work8/>} />
       <Route path="/Document" element={<Document/> } />
     </Routes>
 
      {/* Global Components (These appear on every page) */}
   
      

   
      </>
  );
}

export default App;

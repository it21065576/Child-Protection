import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
// import Navbar from "./Components/Service/create";
import RecordList from "./Components/Service/recordList";
import Edit from "./Components/Service/edit";
import Create from "./Components/Service/create";

import ServiceDetails from "./Components/Service/ServiceDetails";
import AddService from "./Components/Service/AddService";
import ServiceDash from "./Components/Service/ServiceDash";
 
const App = () => {
 return (
   <div>
     {/* <Navbar /> */}
     <Routes>
       {/* <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} /> */}

       <Route path="/sdetails" element={<ServiceDetails/>}/>
       <Route path="/addService" element={<AddService/>}/>
       <Route path="/serviceDash" element={<ServiceDash/>}/>
     </Routes>
   </div>
 );
};
 
export default App;
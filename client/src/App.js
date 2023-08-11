import React from "react";
import Sidebar from "./components/Sidebar";
import BodyContainer from "./components/BodyContainer";
import './App.css';

// SIDEBAR: photo, info, contact
// NAVBAR: links for pages
// BODY (pages) WITH SWITCHER -> coding, resume, other = music and writing
const App = () => (
<>
    < Sidebar />
    < BodyContainer />
</>
)

export default App;

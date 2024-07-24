import React from "react";
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar";
import SmartGarden from "./Smartgarden.jsx";
import Chatbot2 from "./Chatbot2.jsx";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <SideBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <TopBar />

        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <SmartGarden />
        </div>
        
      </div>
      <Chatbot2 />
    </div>
  );
};

export default Dashboard;

import { Tab, TabPane } from "@/components/tab";
import AddContant from "@/components/UserManagment/addContant";
import GetUserProfile from "@/components/UserManagment/getUserProfile";
import React, { useState } from "react";
import CreateUserProfile from "../../components/UserManagment/createUserProfile";
export default function User() {
  
  return (
    <>
      <div className="container flex-row ">
        <h1 className=" border-2 p-2 bg-gray-200">User Managment</h1>
        <Tab>
          <TabPane label="User Profile">
          <GetUserProfile/>            
          </TabPane>
          <TabPane label="Create Profile">
          <CreateUserProfile/>            
          </TabPane>
          <TabPane label="Add Contact">
          <AddContant/>          
          </TabPane>
        </Tab>
        {/* <ul className="flex ">
  <li className="flex-1 mr-2">
    <div className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" >User Profile</div>
  </li>
  <li className="flex-1 mr-2">
    <div className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Nav Item</div>
  </li>
  <li className="text-center flex-1">
    <div className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Disabled Item</div>
  </li>
</ul> */}
{/* <UserDetails/> */}
     {/* <CreateUserProfile/>   */}
      </div>
    </>
  );0
}

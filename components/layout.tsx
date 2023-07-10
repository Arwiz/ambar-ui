import { useState } from "react";
import { SideBar,NavigationBar, AccidentCard, Card, MyMap, PublicPropertyDamageCard, MyBlogs } from ".";
import router from "next/router";
import Navbar from "./NavBar";


function Layout(){
  const [sideOn, setSideOn] = useState(false);
return (
  <div className="flex">
      <div>
         <SideBar></SideBar>
      </div>
    <div className="flex-1">
       <Navbar />
         <AccidentCard></AccidentCard>
          <PublicPropertyDamageCard></PublicPropertyDamageCard>
           <MyMap></MyMap>
           <MyBlogs></MyBlogs>
          <Card></Card>
      </div>
    </div>
)};

export default Layout;

import { useState } from "react";
import { SideBar,NavigationBar } from ".";


function Layout(props){
  const [sideOn, setSideOn] = useState(false);
return (
    <div className=" h-screen flex flex-row justify-start">
      <SideBar></SideBar>
      {props.children}
     
    </div>
)};

export default Layout;

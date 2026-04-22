import React from 'react'
import { FolderClosed, House, Lightbulb, Link, UserRound } from "lucide-react";

import Dock from './Dock';
import { IoPersonAdd } from 'react-icons/io5';

const Navbar = () => {
     const items = [
        { icon: <House color="white"  size={20}/>, label: 'Home', Link: "/" },
        { icon: <UserRound color="white" size={20} />, label: 'Aboutus', Link: "/about" },
        { icon: <Lightbulb color="white" size={20} />, label: 'Skill', Link: "/skills" },
        { icon: <FolderClosed color="white" size={20} />, label: 'Project', Link: "/projects" },
        { icon: <IoPersonAdd  color="white" size={20} />, label: 'Contact', Link: "/contact" },
      ];
  return (
    <>
    <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <button className=' bg-green-500 text-white fixed right-4 bottom-4 z-50'></button>
      </>
  )
}

export default Navbar
import { Outlet, Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'
import React, { useState } from 'react';
import DropdownContacto from "../components/DropdownContacto";
import { HashLink } from 'react-router-hash-link';
import NavBar from './NavBar';
import Footer from './Landing/Footer';

export default function HomeLayout() {



  return (
    <>
      {/* N A V  I N I C I O */}
      
      <NavBar/>

      {/* C O N T E N I D O */}

      <div className="m-0 p-0 bg-bg overflow-auto">
      <main>
        <Outlet />
      </main>
      </div>


      {/* F O O T E R */}

      <Footer/>

    </>
  )
}

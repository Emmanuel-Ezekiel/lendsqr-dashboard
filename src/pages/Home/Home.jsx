import React, { useState, useEffect } from 'react';
import './Home.scss';
import Sidebar from '../../component/sidebar/sidebar';
import Navbar from '../../component/navbar/navbar';



const Home = () => {

  return (
    <div className='home'>
       <Sidebar/>
        <div className="homeContainer">
        <Navbar/>
        </div>
    </div>
  )
}

export default Home
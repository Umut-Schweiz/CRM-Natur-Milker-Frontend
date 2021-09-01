import React from 'react';
import './Home.css'
import '../../App.css';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {

  return (
    <>
      <Navbar />
      <main id="home-page-main">
        <h1 id="home-page-titel" >Natur Milker Customer Relationship Management</h1>
        <img id="home-page-image" src="../images/Natur Milker Logo.png" alt="natur-milker" />
      </main>
      <Footer />
    </>
  )
}

export default Home

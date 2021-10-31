import React from 'react';
import "./MyAccount.css"
import MyCostumers from './MyCustomers';
import MyProjects from './MyProjects';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthService from '../../services/auth'


const MyAccount = () => {
  
  const currentUser = AuthService.getCurrentUser();

  const [costumers, setCostumers] = useState(false)
  const [projects, setProjects] = useState(false)

  const showCostumers = () => {
    if (costumers === false) {
      setCostumers(true)
      setProjects(false)
    }
  }

  const showProjects = () => {
    if (projects === false) {
      setProjects(true)
      setCostumers(false)
    }
  }

  return (

    <>
      
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1><span>NaturMilker</span></h1>
          <div ><i class="fas fa-user-circle fa-3x"></i><h2>My Account</h2></div>
        </div>

        <div className="sidebar-menu">            
            <div className={costumers ? 'sidebar-menu-active' : 'sidebar-menu-costumer'} onClick={showCostumers}><i class="fas fa-users fa-lg"></i>Customers</div>
            <div className={projects ? 'sidebar-menu-active' : 'sidebar-menu-projects'}onClick={showProjects}><i class="fas fa-tasks fa-lg"></i>Projects</div>
        </div>

      </div>

      <div className="main-content">

        <header className="my-account-header">

          <div className="header-title">
            <h3>
              <Link to="/">
              <span><i class="fas fa-home fa-2x"></i></span>
              Home
              </Link>
            </h3>
          </div>
          <div className="search-wrapper" >
            <span><i class="fas fa-search-plus fa-lg"></i></span>
            <input type="search" placeholder="Search here"></input>
          </div>

          <div className="user-wrapper" >
            <img src="./images/img-3.svg" width="40px" height="40px" alt="account-holder"></img>
            <div>
              <h4>Natur Gangs</h4>
              <small>Log Out</small>
            </div>
          </div>

        </header>

        <main className="my-account-main">

          <div className="cards">
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Customers</span>
              </div>
              <div>
                <i class="fas fa-users fa-3x"></i>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Orders</span>
              </div>

              <div>
                <i class="fas fa-sort-amount-up-alt fa-3x"></i>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>My Account-Settings</span>
              </div>
              <div>
              <i class="fas fa-user-cog fa-3x"></i>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Income</span>
              </div>

              <div>
                <i class="fas fa-comments-dollar fa-3x"></i>
              </div>
            </div>
          </div>
          <div className="content-table">
            {costumers ? <MyCostumers /> : ""}
            {projects ? <MyProjects /> : ""}
          </div>

        </main>

      </div>
    </>

  )
}

export default MyAccount

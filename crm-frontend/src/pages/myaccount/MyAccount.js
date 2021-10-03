import React from 'react';
import "./MyAccount.css"
import MyCostumers from './MyCostumers';
import MyProjects from './MyProjects';
import { useState } from 'react';

const MyAccount = () => {

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
      <input type="checkbox" id="nav-toggle"></input>
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2><i class="fas fa-user"></i><span>NaturMilker</span></h2>
        </div>

        <div className="sidebar-menu">            
            <div ><i class="fas fa-user"></i> Dashboard</div>
            <div className={costumers ? 'sidebar-menu-active' : 'sidebar-menu-costumer'} onClick={showCostumers}><i class="fas fa-user"></i>Costumers</div>
            <div className={projects ? 'sidebar-menu-active' : 'sidebar-menu-projects'}onClick={showProjects}><i class="fas fa-user"></i>Projects</div>
      
        </div>
      </div>

      <div className="main-content">

        <header className="my-account-header">

          <div className="header-title">
            <h3>
              <label for="nav-toggle">
                <span><i class="fas fa-user"></i></span>
              </label>
              Dashboard
            </h3>
          </div>
          <div className="search-wrapper" >
            <span><i class="fas fa-user"></i></span>
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
                <span>Costumers</span>
              </div>
              <div>
                <i class="fas fa-user"></i>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Projects</span>
              </div>

              <div>
                <i class="fas fa-user"></i>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Orders</span>
              </div>

              <div>
                <i class="fas fa-user"></i>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Income</span>
              </div>

              <div>
                <i class="fas fa-user"></i>
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

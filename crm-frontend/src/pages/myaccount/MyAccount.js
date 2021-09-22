import React from 'react';
import "./MyAccount.css"


const MyAccount = () => {

  return (

    <>
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2><i class="fas fa-user"></i><span> NaturMilker</span></h2>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="./" className="active"><span><i class="fas fa-user"></i></span>Dashboard </a>
            </li>
            <li>
              <a href="./"> <span><i class="fas fa-user"></i></span>Costumers</a>
            </li>
            <li>
              <a href="./"> <span><i class="fas fa-user"></i></span>Projects</a>
            </li>
            <li>
              <a href="./"> <span><i class="fas fa-user"></i></span>Orders</a>
            </li>
            <li>
              <a href="./"> <span><i class="fas fa-user"></i></span>Inventory</a>
            </li>
            <li>
              <a href="./"> <span><i class="fas fa-user"></i></span>Accounts</a>
            </li>
            <li>
              <a href="./"> <span><i class="fas fa-user"></i></span>Tasks</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">

        <header>

          <div className="header-title">
            <h3>
              <label for="">
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
              <small>Super Admin</small>

            </div>
          </div>


        </header>

        <main>
          <div className="cards">
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Costumer</span><i class="fas fa-user"></i>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Projects</span><i class="fas fa-user"></i>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Orders</span><i class="fas fa-user"></i>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Income</span><i class="fas fa-user"></i>
              </div>
            </div>
          </div>
        </main>

      </div>
    </>

  )
}

export default MyAccount

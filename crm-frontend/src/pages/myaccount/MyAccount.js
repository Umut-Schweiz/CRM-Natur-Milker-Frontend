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

        <header className="my-account-header">

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

          <div className="recent-grid">
            <div className="projects">
              <div className="card">
                <div className="card-header">
                  <h3> Recent Projects</h3>
                  <button>See all <i class="fas fa-user"></i> </button>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                  <table className="card-body-table" width="100%">
                    <thead>
                      <tr>
                        <td>Project Title</td>
                        <td>Department</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI Team</td>
                        <td>
                          <span className="status purple"></span>
                          review
                        </td>
                      </tr>
                      <tr>
                        <td>Web Devolopment</td>
                        <td>Web Devolopment Team</td>
                        <td>
                          <span className="status pink"></span>
                          in progress
                        </td>
                      </tr>
                      <tr>
                        <td>Ushop app</td>
                        <td>Mobile Team</td>
                        <td>
                          <span className="status orange"></span>
                          pending
                        </td>
                      </tr>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI Team</td>
                        <td>
                        <span className="status purple"></span>
                          review
                        </td>
                      </tr>
                      <tr>
                        <td>Web Devolopment</td>
                        <td>Web Devolopment Team</td>
                        <td>
                        <span className="status pink"></span>
                          in progress
                        </td>
                      </tr>
                      <tr>
                        <td>Ushop app</td>
                        <td>Mobile Team</td>
                        <td>
                        <span className="status orange"></span>
                          pending
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="costumers">

              <div className="card">
                <div className="card-header">
                  <h3> New Costumer</h3>
                  <button>See all <i class="fas fa-user"></i> </button>
                </div>

                <div className="card-body">
                  <div className="costumer">
                    <div className="costumer-card-info">
                      <img src="./images/img-2.svg" width="40px" height="40px" alt=""></img>
                      <div>
                        <h4>Umut Gungor</h4>
                        <small>CEO EXPERT</small>
                      </div>
                    </div>
                    <div className="costumer-card-contact">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="costumer">
                    <div className="costumer-card-info">
                      <img src="./images/img-2.svg" width="40px" height="40px" alt=""></img>
                      <div>
                        <h4>Umut Gungor</h4>
                        <small>CEO EXPERT</small>
                      </div>
                    </div>
                    <div className="costumer-card-contact">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="costumer">
                    <div className="costumer-card-info">
                      <img src="./images/img-2.svg" width="40px" height="40px" alt=""></img>
                      <div>
                        <h4>Umut Gungor</h4>
                        <small>CEO EXPERT</small>
                      </div>
                    </div>
                    <div className="costumer-card-contact">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="costumer">
                    <div className="costumer-card-info">
                      <img src="./images/img-2.svg" width="40px" height="40px" alt=""></img>
                      <div>
                        <h4>Umut Gungor</h4>
                        <small>CEO EXPERT</small>
                      </div>
                    </div>
                    <div className="costumer-card-contact">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="costumer">
                    <div className="costumer-card-info">
                      <img src="./images/img-2.svg" width="40px" height="40px" alt=""></img>
                      <div>
                        <h4>Umut Gungor</h4>
                        <small>CEO EXPERT</small>
                      </div>
                    </div>
                    <div className="costumer-card-contact">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>
    </>

  )
}

export default MyAccount

import React from 'react';

const MyProjects = () => {

  return (
    
    
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
    
  )
}

export default MyProjects

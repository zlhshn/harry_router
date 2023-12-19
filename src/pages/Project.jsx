import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Project = () => {
const navigate = useNavigate()

  return (
    <>
    <div >
    
      <div className="projects__bio-image">
        <h1>FİLM SERİES</h1>
      </div>
      </div>

      {/* <!-- PROJECT MAIN --> */}
      <main className="projects">
        <div className="projects__items">
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-1.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-2.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-3.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-4.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-5.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-6.jpg" alt="My Project" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;

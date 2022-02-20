import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./Homepage.scss";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      {/* <div id="about">
        <div className="container">
          <h1 className="text-center aboutHeading">About Me</h1>
          <p className="aboutPG text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            explicabo nihil! Animi cumque eum numquam, omnis ratione repudiandae
            sit suscipit voluptas. Alias aperiam commodi, exercitationem
            incidunt nostrum numquam repellendus unde.
          </p>
        </div>
      </div> */}

      {/* <div id="projects">
        <div className="container">
          <h1 className="text-center aboutHeading">Projects</h1>
          <div className="row pt-5 m-auto" id="projectCards">
            <div className="col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img" id="project1"></div>
                <a href="#" target="_blank" className="grow">
                  <div className="card-custom-avatar">
                    <img
                      className="img-fluid"
                      src="https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/3.png"
                      alt="Avatar"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <h4 className="card-title">Project 1</h4>
                  <p className="card-text">
                    Enter details about your project here...
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-info" target="_blank">
                    View Live
                  </a>
                  <a href="#" className="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img" id="project2"></div>
                <a href="#" target="_blank" className="grow">
                  <div className="card-custom-avatar">
                    <img
                      className="img-fluid"
                      src="https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png"
                      alt="Avatar"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <h4 className="card-title">Project 2</h4>
                  <p className="card-text">
                    Enter details about your project here...
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-info">
                    View Live
                  </a>
                  <button type="button" className="btn btn-outline-primary">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-3">
              <div className="card card-custom bg-white border-white border-0">
                <div className="card-custom-img" id="portfolio"></div>
                <a href="#">
                  <div className="card-custom-avatar">
                    <img
                      className="img-fluid"
                      src="https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/2.png"
                      alt="Avatar"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <h4 className="card-title">My Portfolio</h4>
                  <p className="card-text">
                    Enter details about your project here...
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-info">
                    View Live
                  </a>
                  <button type="button" className="btn btn-outline-primary">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div id="contact">
        <div className="container">
          <h1 className="text-center aboutHeading">Contact Me</h1>
          <form>
            <div className="form-group">
              <label for="formGroupExampleInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-info mb-2" id="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* <footer className="footer">
        <div className="container text-center">
          <span className="footer-text">Keep Tracing Me</span>
        </div>
      </footer> */}
    </>
  );
};

export default HomePage;

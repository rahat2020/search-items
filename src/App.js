import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/publish" className="navbar-brand">  <button className="btn btn-light shadow rounded logo">Publish</button>
          </Link>
          <h6 className="justify-content-center align-items-center">save</h6>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" id="nav-item" aria-current="page"><FontAwesomeIcon icon={faCog} /></Link>
              <Link className="nav-link" id="nav-item" aria-current="page"><FontAwesomeIcon icon={faTimes} /></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* input section */}
      <div className="main-part">
        <div className="container">
          <div className="box">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">TAGS (optional)</label>
                <input type="email" className="form-control" r-10 id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Start typing and we shall make suggestions" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

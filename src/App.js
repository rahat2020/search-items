import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import SearchItem from './SearchItem/SearchItem';

export default function App() {
  const [item, setItem] = useState("")
  const [newItem, setNewItem] = useState([])
  console.log(newItem)

  const targetEvent = (event) => {
    setItem(event.target.value)
  }

  const addItems = (e) => {
    e.preventDefault()
    setNewItem((prevValue) => {
      return [...prevValue, item]
    })
    setItem(" ")
  }
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
            <h6 className="box-header">TAGS (optional)</h6>
            <div className="row d-flex justify-content-center align-items-center">
              {
                newItem.map((val, index) => {
                  console.log(val)
                  return <SearchItem key={index} items={val} />
                })
              }
            </div>

            <form>
              <div className=" mt-4 d-flex justify-content-center align-items-center">
                <input
                  value={item}
                  type="text"
                  onChange={targetEvent}
                  className="form-control"
                  placeholder="Start typing and we shall make suggestions" />

                <button onClick={addItems} className="btn"><FontAwesomeIcon icon={faPlus} /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

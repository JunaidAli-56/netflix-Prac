import React from 'react'
import image1 from '../../image/logo2.png'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg mynav">
        <div className="container-fluid ">
          <a class="navbar-brand" href="#">
            <img src={image1} alt="Bootstrap" width="50" height="45" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Page</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button className="btn btn-danger" type="submit">Search</button> */}
              <button className="btn btn-danger" type="submit"><i class="bi bi-search"></i></button>
            </form>
            <p className='mt-2 px-3'>My Account</p>
            <a href=""><i class="bi bi-bag-check"></i></a>
          </div>
        </div>
      </nav>
    </>
  )
}

import React from 'react'

export default function Footer() {
  let year = new Date().getFullYear()
  return (
    <footer className='bg-dark'>
      <div className="container py-3">
        <div className="row">
          <div className="col">
            <p className='mb-0 text-center text-white'>&copy; {year}. All right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

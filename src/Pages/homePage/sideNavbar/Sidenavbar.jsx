import React from 'react'
import './sidenav.css'

function Sidenavbar() {
  return (
    <div className='sidenav'>
{/* <ul className="nav flex-column ml-auto">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul> */}
<div className='sidenavitems'>
    <button className='btn btn-primary'>dashboard</button>
</div>
<div className='sidenavitems '>
    <button className='btn btn-primary'>dog</button>
</div>
<div className='sidenavitems'>
    <button className='btn btn-primary'>nnnnnn</button>
</div>
<div className='sidenavitems'>
    <button className='btn btn-primary'>nnnnnn</button>
</div>
<div className='sidenavitems'>
    <button className='btn btn-primary'>nnnnnn</button>
</div>

    </div>
  )
}

export default Sidenavbar
import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import './style.scss'

const Staking = () => {
  const { pathname } = useLocation()
  return (
    <div id="staking">
      <div className="tab">
        <NavLink
          to="account"
          className={'item' + (pathname === '/staking' ? ' active' : '')}
        >
          Staking
        </NavLink>
        <NavLink to="leaderboard" className="item">
          Leaderboard
        </NavLink>
        <NavLink to="information" className="item">
          Information
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Staking

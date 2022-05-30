import React,{useState, useEffect} from 'react'

import './style.scss'
import Icons from 'assets/icons'


const Account = () => {
  const [copied,setCopied] = useState(false)

  const valuable = {
    address: '0x307e415778f2aa486e20387a8ecddf69c68783fe',
    reference_link: 'https://sqf-gunbow.vercel.app',
  }

  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    },1000)
  },[copied])

  function handleClipBoard(type) {
    switch (type) {
      case 'address':
        navigator.clipboard.writeText('https://sqfgame.com/buy-token/'+valuable.address)
        break
      case 'reference_link':
        navigator.clipboard.writeText(valuable.reference_link)
        break
    }
    setCopied(true)
  }
  return (
    <div className="account">
      <div className="container">

        <h3 className="primary-tex-yellow">My Wallet</h3>
        <div className="content">
          <div className="content-wrap">

            <div className="item">
              <label>Total token buy:</label>
              <div className="item-content">
                <span className="primary-tex-yellow">0</span>
                <span className="unit primary-tex-gray"> SQF</span>  
              </div>
            </div>

            <div className="item">
              <label>Balance:</label>
              <div className="item-content">
                <span className="primary-tex-yellow">0</span>
                <span className="unit primary-tex-gray"> SQF</span>  
              </div>
            </div>

            <div className="item">
              <label>Ablance Available:</label>
              <div className="item-content">
                <span className="primary-tex-yellow">0</span>
                <span className="unit primary-tex-gray"> SQF</span>  
              </div>
            </div>

            <div className="item">
              <label>Unlock Percent:</label>
              <div className="item-content">
                <span className="primary-tex-yellow">0</span>
                <span className="unit primary-tex-gray"> %</span>  
              </div>
            </div>

            <div className="item">
              <label>Claimed Percent:</label>
              <div className="item-content">
                <span className="primary-tex-yellow">0</span>
                <span className="unit primary-tex-gray"> %</span>  
              </div>
            </div>

            <div className="item2" >
              <label>Address:</label>
              <span className="primary-tex-yellow ml-10 ref">{valuable.address}</span>
              <span className="btn-copy" onClick={() => handleClipBoard('address')}>
                <Icons.Copy height={'20'} />
              </span>
            </div>

            <div
              className="item2"
              
            >
              <label>Reference Link:</label>
              <span className='primary-tex-yellow ml-10'>{valuable.reference_link}</span>
              <span className="btn-copy" onClick={() => handleClipBoard('reference_link')}>
                <Icons.Copy height={'20'} />
              </span>
            </div>

          </div>
        </div>

        <h3 className="primary-tex-yellow">Activity History</h3>
        <div className="content">
          <div className="item">No data</div>
        </div>


        <h3 className="primary-tex-yellow">Buy Token History</h3>
        <div className="content">
          <div className="item">No data</div>
        </div>

        {
          copied
          &&
          (
             <div className="popup-copied">
              <div className="popup-copied-wrap">
                COPIED!
              </div>
            </div>
          )
        }

        {/* <h3>Overview</h3>
        <div className="content overview">
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/weapon.png')}
              alt="error png"
            />
            <span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/outfit.png')}
              alt="error png"
            />
            <span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/stone.png')}
              alt="error png"
            />
            <span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/pet.png')}
              alt="error png"
            />
            <span> 0</span>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Account

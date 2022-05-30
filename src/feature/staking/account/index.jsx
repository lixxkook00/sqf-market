import React from 'react'

import './style.scss'
import Icons from 'assets/icons'
import Popup from 'components/popup/comingsoon'

const Account = () => {
  return (
    <>
      <div className="box-staking">
        <div className="item left">
          <h1 className="primary-tex-yellow">My MSP Staking</h1>
          <div className="info">
            <div className="info-item">
              <div className="title primary-tex-gray font-weight-700 font-size-18">TOTAL STAKED</div>
              <span className="coin">
                <span className="primary-tex-yellow font-weight-700">0</span>
                <span className="primary-tex-gray font-weight-700 font-size-18">SQF</span> 
              </span>
            </div>
            <div className="info-item">
              <div className="title primary-tex-gray font-weight-700 font-size-18">AVAILABLE WALLET</div>
              <span className="coin">
                <span className="primary-tex-yellow font-weight-700">0</span>
                <span className="primary-tex-gray font-weight-700 font-size-18">SQF</span> 
              </span>
            </div>
          </div>
          <div className="button active">
            <button>
              Stake
              <Popup />
            </button>
          </div>
          <div className="button">
            <button>
              Stake
              <Popup />
            </button>
          </div>
        </div>


        <div className="wrapper">
          <div className="item right">
            <h1 className="primary-tex-yellow">Total Staked</h1>
            <div className="coin">
              <span className="primary-tex-yellow font-weight-700">0</span>
              <span className="primary-tex-gray font-weight-700 font-size-18">SQF</span> 
            </div>
            <Icons.Lock height={'50'} />
          </div>


          <div className="item right">
            <h1 className="primary-tex-yellow">My Rank</h1>
            <div className="rank-box">
              <span className="primary-tex-gray font-weight-700 font-size-18">Rank: ~</span>
              <span className="primary-tex-gray font-weight-700 font-size-18">
                Point:
                <span className="primary-tex-yellow font-size-18">0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="box-staking">
        <div className="item left">
          <div className="wrapper-custom">
            <div className="content">
              <h1 className="primary-tex-yellow">Claimable</h1>
              <div className="coin">
                <span className="primary-tex-yellow font-weight-700">0</span>
                <span className="primary-tex-gray font-weight-700 font-size-18">SQF</span> 
              </div>
            </div>
            <div className="claim-button">
              <button>
                Claim
                <Popup />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account

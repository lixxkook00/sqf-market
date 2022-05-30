import React from 'react'

import './style.scss'
import Popup from 'components/popup/comingsoon'

const NotOnMaket = () => {
  return (
    <div className="not-on-market-box">
      {/* <div className="container">
        <div className="transfer">
          <div className="item">
            <label>Transfer to wallet</label>
            <input
              type="text"
              placeholder="Enter the wallet address you want to transfer to"
            />
          </div>
          <div className="item">
            <label>Transfer to wallet</label>
            <input type="text" placeholder="Enter the quantity" />
          </div>
          <div className="button">
            <button>
              <Popup />
              Button
            </button>
          </div>
        </div>
      </div> */}
      <div className="list-item">
        <div className="container">{renderItemList()}</div>
      </div>
    </div>
  )
}
function renderItemList() {
  const items = []
  for (var i = 0; i < 2; i++) {
    const itemRow = []
    for (var j = 0; j < 6; j++) {
      itemRow.push(<Item id={i * 6 + j} key={i * 6 + j} />)
    }
    items.push(
      <div className="row" key={i}>
        {itemRow}
      </div>,
    )
  }
  return items
}
const Item = ({ id }) => {
  return (
    <div className="item col-6 col-sm-2" key={id}>
      <div className="wrapper">
        <div className="title">
          <img src={require('assets/img/title.png')} alt="error png" />
          <span>ID: 3165</span>
        </div>
        <div className="img">
          <img src={require('assets/img/item.png')} alt="error png" />
        </div>
        <div className="button">
          <button>
            Sell
            <Popup />
          </button>
        </div>
        <div className="button">
          <button>
            Transfer
            <Popup />
          </button>
        </div>
      </div>
    </div>
  )
}
export default NotOnMaket

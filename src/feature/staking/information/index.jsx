import React from 'react'

import './style.scss'

const Information = () => {
  return (
    <div className="information container">
      <h3>Information</h3>
      <div className="info-box">
        <div className="left">
          <p>There are 4165 Eggs Baskets on the market.</p>
          <p>
            Users will stake MSP Tokens in exchange for points and have a top
            point ranking to get the right to buyEgg Baskets.
          </p>
          <p>Each 100 $MSP for 1 hour get 10 points.</p>
          <p>Top 596 will buy Egg Baskets.</p>
          <p>
            Users who have more than 10 points but are not at the top will be
            randomly selected 200 people to buy 4 Egg Baskets.
          </p>
          <p>
            After all people on the whitelist have purchased, the remaining Egg
            Baskets will be sold to those who come first, and will end as soon
            as all Egg Baskets are sold out, each person only can buy 3 Egg
            Baskets.
          </p>
        </div>
        <div className="right">
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Number of egg baskets</th>
                <th>Number of people can buy</th>
                <th>Total egg baskets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tier 1</td>
                <td>13</td>
                <td>1</td>
                <td> 13</td>
              </tr>
              <tr>
                <td>Tier 2</td>
                <td>12</td>
                <td>2</td>
                <td> 24</td>
              </tr>
              <tr>
                <td>Tier 3</td>
                <td>11</td>
                <td>3</td>
                <td> 33</td>
              </tr>
              <tr>
                <td>Tier 4</td>
                <td>10</td>
                <td>5</td>
                <td> 50</td>
              </tr>
              <tr>
                <td>Tier 5</td>
                <td>9</td>
                <td>15</td>
                <td>135</td>
              </tr>
              <tr>
                <td>Tier 6</td>
                <td>8</td>
                <td>20</td>
                <td>160</td>
              </tr>
              <tr>
                <td>Tier 7</td>
                <td>7</td>
                <td>50</td>
                <td>350</td>
              </tr>
              <tr>
                <td>Tier 8</td>
                <td>6</td>
                <td>100</td>
                <td>600</td>
              </tr>
              <tr>
                <td>Tier 9</td>
                <td>5</td>
                <td>200</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>200 Random</td>
                <td>4</td>
                <td>200</td>
                <td>800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Information

// import { Link } from 'react-router-dom'
import React, { useRef, useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'

// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import './style.scss'
import Pagination from 'components/pagination'
import Icons from 'assets/icons'
import Items from 'assets/data/items.json'
import detailPopupSlice from 'components/popup/detail/slice'
import Popup from 'components/popup/comingsoon'

const MarketPlace = () => {

   // Handle Modal Nav Filter

    const [valueType,setValueType] = useState("Weapon")

    const onChangeValue = (event) => {
      console.log(event.target.value);
    }


    const [stateNav, setStateNav] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    }); 

    const modalCartNav = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          // onClick={toggleDrawerNav(anchor, false)}
          onKeyDown={toggleDrawerNav(anchor, false)}
        >
            <div className="filter-tab">
              <div className="closebtn" onClick={toggleDrawerNav(anchor, false)}>
                <Icons.XMark height={'16'} />
              </div>
              <div className="filter-tab-content">
                <div className="title ">
                  Properties
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Common" name="Properties"/> Common
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Rare" name="Properties" /> Rare
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Epic" name="Properties" /> Epic
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Legendary" name="Properties" /> Legendary
                </div>
              </div>

              <div className="filter-tab-content">
                <div className="title">
                  Type
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Weapon" name="Type" onClick={() => setValueType("Weapon")} checked={valueType=="Weapon"}/> Weapon
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Outfit" name="Type" onClick={() => setValueType("Outfit")} checked={valueType=="Outfit"}/> Outfit
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Accessories" name="Type" onClick={() => setValueType("Accessories")} checked={valueType=="Accessories"}/> Accessories
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Materiral" name="Type" onClick={() => setValueType("Materiral")} checked={valueType=="Materiral"}/> Materiral
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Pet" name="Type" onClick={() => setValueType("Pet")} checked={valueType=="Pet"}/> Pet
                </div>
              </div>

              {
                valueType === "Outfit"

                &&
                (
                  <div className="filter-tab-content">
                    <div className="title">
                      Outfit
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Head" name="Outfit" /> Head
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Face" name="Outfit" /> Face
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Clothes" name="Outfit" /> Clothes
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Wing" name="Outfit" /> Wing
                    </div>
                  </div>
                )
              }

              {
                valueType === "Accessories"

                &&

                (
                  <div className="filter-tab-content">
                    <div className="title">
                      Accessories
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Necklace" name="Accessories" /> Necklace
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Ring" name="Accessories" /> Ring
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Bracer" name="Accessories" /> Bracer
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Treasure" name="Accessories" /> Treasure
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Badge" name="Accessories" /> Badges
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Earrings" name="Accessories" /> Earrings
                    </div>
                  </div>
                )
              }

              {
                valueType === "Materiral"

                &&

                (
                  <div className="filter-tab-content">
                    <div className="title">
                      Materiral
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Stone" name="Materiral" /> Stone
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Forge" name="Materiral" /> Forge
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Holy light" name="Materiral light" /> Holy light
                    </div>
                  </div>
                )

              }

              {
                valueType === "Pet"

                &&

                (
                  <div className="filter-tab-content">
                    <div className="title">
                      Pet
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Mounts" name="Pet" /> Mounts
                    </div>
                    <div className="filter-tab-item">
                      <input type="radio" value="Assistant" name="Pet" /> Assistant
                    </div>
                  </div>
                )
              }

            </div>
        </Box>
    );

    const toggleDrawerNav = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setStateNav({ ...stateNav, [anchor]: open });
    };

  return (
    <div id="marketplace">
      <div className="main">

        {/* Modal Nav Mobile Menu*/}
        <Drawer
            anchor={'right'}
            open={stateNav['right']}
            onClose={toggleDrawerNav('right', false)}
        >
            {modalCartNav('right')}
        </Drawer>

        <div className="summary container">
          <div className="row">
            <div className="col-xl-6 col-12">
              <div className="d-flex container justify-content-center">
                <div className="item cart-title">
                  <span className="img">
                    <img src={require('assets/img/summary.png')} alt="error png" />
                  </span>
                  <span className="infor">
                    <h4>Total volume</h4>
                    <span className="primary-tex-yellow">161284</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="d-flex container justify-content-center">
               <div className="item cart-title">
                  <span className="img">
                    <img src={require('assets/img/summary.png')} alt="error png" />
                  </span>
                  <span className="infor">
                    <h4>MSP price</h4>
                    <span className="primary-tex-yellow">
                      0.18 
                    </span>
                    <span>BUSD</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="filter">
                <div className="filter-title primary-tex-gray font-weight-700 font-size-18" onClick={toggleDrawerNav('right', true)}>
                  Filter
                </div>
                <div className="select">
                  <Icons.AngleDown height={'10'} />
                  <select>
                    <option value="lowest">Lowest Price</option>
                    <option value="highest">Highest Price</option>
                  </select>
                </div>
                <div className="input">
                  <input type="text" placeholder="Egg basket ID" />
                  <img src={require('assets/img/search.png')} alt="error png" />
                </div>
                <div className="filter-icon" onClick={toggleDrawerNav('right', true)}>
                  <i class="fa-solid fa-filter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-item">
          <div className="container">
            <RenderItemList />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}
function RenderItemList() {
  const refObj = useRef({
    weapon: 'weapon',
    head: 'outfit',
    face: 'outfit',
    clothes: 'outfit',
    wing: 'outfit',
    outfit: 'outfit',
    necklace: 'accessories',
    ring: 'accessories',
    bracer: 'accessories',
    treasure: 'accessories',
    badge: 'accessories',
    earrings: 'accessories',
    stone: 'materiral',
    forge: 'materiral',
    holy_light: 'materiral',
    mounts: 'pet',
    assistant: 'pet',
  })
  return (
    <div className="row">
      {Items.map((item) => {
        return <Item infor={item} type={refObj.current[item.type]} />
      })}
    </div>
  )
}
const Item = (props) => {
  const { infor, type } = props
  const itemRef = useRef(null)
  const dispatch = useDispatch()
  function handleDetailPopup() {
    dispatch(detailPopupSlice.actions.showPopup(infor))
  }
  useEffect(() => {
    itemRef.current.parentElement.setAttribute('data-after', infor.name)
  })
  return (
    <div className="item col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2" key={infor.id}>
      {/* <Link className="wrapper" to={'/marketplace/' + infor.id}> */}
      <div className="wrapper" onClick={handleDetailPopup}>
        <div className="title">
          <img src={require('assets/img/title.png')} alt="error png" />
          <span ref={itemRef}>{infor.name}</span>
        </div>
        <div className="img">
          <img
            src={require(`assets/img/items/${infor.path}`)}
            alt="error png"
          />
        </div>
        <div className="information">
          <div className="info-item">
            <img src={require('assets/img/gem1.png')} alt="error png" />
            <label>Rarity: </label>
            <span>{infor.rarity}</span>
          </div>
          <div className="info-item">
            <img src={require('assets/img/gem3.png')} alt="error png" />
            <label>Date: </label>
            <span>29/5/2022</span>
          </div>
          <div className="info-item">
            <img src={require('assets/img/gem2.png')} alt="error png" />
            <label>Type: </label>
            <span>{infor.type}</span>
          </div>
          {infor.type !== 'weapon' ? (
            <div className="info-item">
              <img src={require('assets/img/gem4.png')} alt="error png" />
              <label>Object: </label>
              <span>{type}</span>
            </div>
          ) : (
            <div className="info-item">
              <span>&nbsp;</span>
            </div>
          )}
        </div>
        <div className="price">
          <span className="img">
            <img src={require('assets/img/coin.png')} alt="error png" />
          </span>
          <span className="coin">380 SQF</span>
        </div>
        <div className="button">
          <button>
            <Popup />
            Buy
          </button>
        </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default MarketPlace

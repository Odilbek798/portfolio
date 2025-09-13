import React from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import './Head.css'

const Head = () => {
  return (
    <div>
        <header className='head'>
            <div className="logo_head">
                <img src="./ufo.gif" alt="" />
            </div>
            <div className="menu">
                <BurgerMenu/>
            </div>
        </header>
    </div>
  )
}

export default Head
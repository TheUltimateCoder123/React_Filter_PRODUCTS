import React from 'react'
import Button from '../components/Button'
import './Recommended.css'
function Recommended({handleClick}) {
  return (
    <>
    <div>
      <div className="recommended-flex">
  <Button  className="bcontent"onClickHandler={handleClick} value="" title="All Products"/>
  <Button   className="bcontent" onClickHandler={handleClick} value="Nike" title="Nike"/>
  <Button  className="bcontent" onClickHandler={handleClick} value="Adidas" title="Adidas"/>
  <Button  className="bcontent" onClickHandler={handleClick} value="Puma" title="Puma"/>
  <Button   className="bcontent" onClickHandler={handleClick} value="Vans" title="Vans"/>

   
      </div>
    </div>
  </>
  )
}

export default Recommended
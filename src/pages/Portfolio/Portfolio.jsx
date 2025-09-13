import React from 'react'
import Card from '../../components/card/Card'
import './Portfolio.css'
import Head from '../../components/Head/Head'
const Portfolio = () => {
  return (
    <div>
      <Head/>
      <div className="cardss">
      <Card src={""} image={"./image.png "}/>
      <Card src={""} image={"./i1.png"}/>
      <Card src={""} image={"./i2.png"}/>
      <Card src={""} image={"./i3.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i4.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i5.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i6.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i7.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i8.png"}/>
      <Card src={""} image={"./i9.png"}/>
      <Card src={""} image={"./i2.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i4.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i6.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i8.png"}/>
      <Card src={""} image={"./i1.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i3.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i5.png"}/>
      <Card src={"https://cofee-sand.vercel.app/"} image={"./i7.png"}/>
      <Card src={""} image={"./i9.png"}/>
      <Card src={""} image={"./image.png"}/>
      </div>
    </div>
  )
}

export default Portfolio
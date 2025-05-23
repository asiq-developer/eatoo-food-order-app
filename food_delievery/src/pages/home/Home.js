import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/appdownload/AppDownload'

const Home = () => {
  const[category,setcategory] = useState('ALL');
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setcategory}  />
      <FoodDisplay category={category} />
     
   </div>
  )
}

export default Home




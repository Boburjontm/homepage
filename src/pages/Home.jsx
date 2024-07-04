import React, { useEffect } from "react";
import Slider from '../components/Slider'
import Hero1 from '../components/Hero1'
import Hero3 from '../components/Heo3'
import Company from '../components/Company'
import CompanyLocation from '../components/CompanyLocation'
import FooterTop from '../components/FooterTop'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
      <Slider/>
      </div>
      <div>
      <Hero1/>
      </div>
      <div>
      </div>
      <div>
      <Hero3/>
      </div>
      <div>
      <Company/>
      </div>
      <div>
        <CompanyLocation/>
      </div>
      <div>
        <FooterTop/>
      </div>
      
    </div>
  )
}

export default Home

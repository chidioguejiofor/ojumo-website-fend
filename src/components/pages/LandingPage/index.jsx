import React from 'react';
import OjumoBriefInfo from '../../layouts/landingPage/OjumoBriefInfo'
import MissionSection from '../../layouts/landingPage/MissionSection'
import Footer from '../../layouts/landingPage/Footer'
import UpcomingEvents from '../../layouts/landingPage/UpcomingEvents'
import ArticlesSection from '../../layouts/landingPage/ArticleSection'
export default function LandingPage(){

    return (
        <div>
              <OjumoBriefInfo/>
              <MissionSection/>
              {/* <UpcomingEvents/> */}
              <ArticlesSection/>
              <Footer></Footer>
        </div>


    )
}

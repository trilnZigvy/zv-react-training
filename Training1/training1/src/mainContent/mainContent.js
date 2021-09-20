import React, { Component } from 'react'
import Banner from '../Components/banner/banner'
import CardArea from '../Components/cardArea/cardArea'
import CardArea2 from '../Components/cardArea2/cardArea2'
import Banner2 from '../Components/banner2/banner2'
import CardArea3 from '../Components/cardArea3/cardArea3'
import LocationBar from '../Components/locationBar/locationBar'
export default class MainContent extends Component {
    render() {
        return (
          <div>
            <Banner />

            <CardArea title={"Explore nearby"} />
            <CardArea2 title={"Live anywhere"} />
            <Banner2 />
            <CardArea3 title={"Discover things to do"} />
            <LocationBar title={"Inspiration for future getaways"} />
          </div>
        );
    }
}

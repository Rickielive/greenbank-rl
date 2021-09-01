import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <SideBar isOpen={isOpen} toggle = {toggle}/>
            <NavBar toggle = {toggle}/>
            <HeroSection />
            <InfoSection />
        </React.Fragment>
    )
}

export default Home

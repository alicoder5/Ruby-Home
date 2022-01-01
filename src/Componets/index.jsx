import React from 'react'
import Header from './Header'
import { MainBox } from './style'
import MainContent from './MainContent/index.jsx'
import BotomMainContent from './BottomMainCon/index.jsx'
import Populer from './PopulerProperties/index.jsx'
import PropertyFeatured from './PropertyFeatured/index.jsx'

function MainCn() {
    return (
        <div>
            <MainBox>
                <Header></Header>
                <MainContent></MainContent>
                <BotomMainContent></BotomMainContent>
                <Populer></Populer>
                <PropertyFeatured></PropertyFeatured>
            </MainBox>
        </div>
    )
}
export default MainCn;
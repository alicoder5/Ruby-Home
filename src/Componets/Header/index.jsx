import React from 'react'
import MainHeader, {Image} from './style'

function Header() {
    return (
        <div>
            <MainHeader>
                <MainHeader.Box1>
                    <Image />
                </MainHeader.Box1>
                <MainHeader.Box2>
                    <MainHeader.littleTexts>Home</MainHeader.littleTexts>
                </MainHeader.Box2>
                <MainHeader.Box3>
                    <MainHeader.littleTexts>Properties </MainHeader.littleTexts>
                </MainHeader.Box3>
                <MainHeader.Box4>
                    <MainHeader.littleTexts>About us</MainHeader.littleTexts>
                </MainHeader.Box4>
                <MainHeader.Box5>
                    <MainHeader.littleTexts>Blog</MainHeader.littleTexts>
                </MainHeader.Box5>
                <MainHeader.Box6>
                    <MainHeader.littleTexts><MainHeader.HeaderButtom>Contact us</MainHeader.HeaderButtom></MainHeader.littleTexts>
                </MainHeader.Box6>
            </MainHeader>
        </div>
    )
}
export default Header;
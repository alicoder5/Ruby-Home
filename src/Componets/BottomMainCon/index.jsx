import React from 'react'
import Main, { MainBox1Img, MainBox2Img, MainBox3Img, MainBox4Img, MainBox5Img } from './style'


export default function BotomMainContent() {
    return (
        <div>
            <Main>

                <Main.mainTitle>Our Partners</Main.mainTitle>

                <Main.BoxKat>

                    <Main.BoxKat.Box1>
                        <MainBox1Img></MainBox1Img>
                    </Main.BoxKat.Box1>
                    <Main.BoxKat.Box2>
                        <MainBox2Img></MainBox2Img>
                    </Main.BoxKat.Box2>
                    <Main.BoxKat.Box3>
                        <MainBox3Img></MainBox3Img>
                    </Main.BoxKat.Box3>
                    <Main.BoxKat.Box4>
                        <MainBox4Img></MainBox4Img>
                    </Main.BoxKat.Box4>
                    <Main.BoxKat.Box5>
                        <MainBox5Img></MainBox5Img>
                    </Main.BoxKat.Box5>

                </Main.BoxKat>

            </Main>
        </div>
    )
}

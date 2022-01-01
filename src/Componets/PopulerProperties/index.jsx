import React, { useState } from 'react'
import Main from './style.js'

export default function Populer() {

    const [like, setLike] = useState(false)
    const [like2, setLike2] = useState(false)
    const [like3, setLike3] = useState(false)
    const [like4, setLike4] = useState(false)
    const [like5, setLike5] = useState(false)
    const [like6, setLike6] = useState(false)

    return (
        <div>
            <Main>
                <Main.TitileBlock>
                    <Main.TitleBlockLeft>
                        <Main.title>Popular Properties</Main.title>
                    </Main.TitleBlockLeft>
                    <Main.TitleBlockRight>
                        <Main.titleMini>VIEW ALL</Main.titleMini>
                    </Main.TitleBlockRight>
                </Main.TitileBlock>

                <Main.MianBlock>

                    <Main.MianBlock.Blocks1>
                        <Main.MianBlockImg1></Main.MianBlockImg1>
                        <Main.MiniBlockBotom>
                            <Main.MiniBlockBotomMainTitle>Capital hill residence
                                {like ?
                                    <Main.BottonBlockLikeImgTrue onClick={() => setLike(false)}></Main.BottonBlockLikeImgTrue>
                                    :
                                    <Main.BottonBlockLikeImgFalse onClick={() => setLike(true)}></Main.BottonBlockLikeImgFalse>
                                }
                            </Main.MiniBlockBotomMainTitle>
                            <Main.MiniBlockBotomLocation>East London</Main.MiniBlockBotomLocation>
                            <Main.MiniBlockBotomTitleEat>123</Main.MiniBlockBotomTitleEat>
                        </Main.MiniBlockBotom>
                    </Main.MianBlock.Blocks1>
                    <Main.MianBlock.Blocks2>
                        <Main.MianBlockImg2></Main.MianBlockImg2>
                        <Main.MiniBlockBotom>
                            <Main.MiniBlockBotomMainTitle>Picket Fence Realty
                                {like2 ?
                                    <Main.BottonBlockLikeImgTrue onClick={() => setLike2(false)}></Main.BottonBlockLikeImgTrue>
                                    :
                                    <Main.BottonBlockLikeImgFalse onClick={() => setLike2(true)}></Main.BottonBlockLikeImgFalse>
                                }
                            </Main.MiniBlockBotomMainTitle>
                            <Main.MiniBlockBotomLocation>East London</Main.MiniBlockBotomLocation>
                            <Main.MiniBlockBotomTitleEat>123</Main.MiniBlockBotomTitleEat>
                        </Main.MiniBlockBotom>
                    </Main.MianBlock.Blocks2>
                    <Main.MianBlock.Blocks3>
                        <Main.MianBlockImg3></Main.MianBlockImg3>
                        <Main.MiniBlockBotom>
                            <Main.MiniBlockBotomMainTitle>Banyon Tree Realty
                                {like3 ?
                                    <Main.BottonBlockLikeImgTrue onClick={() => setLike3(false)}></Main.BottonBlockLikeImgTrue>
                                    :
                                    <Main.BottonBlockLikeImgFalse onClick={() => setLike3(true)}></Main.BottonBlockLikeImgFalse>
                                }
                            </Main.MiniBlockBotomMainTitle>
                            <Main.MiniBlockBotomLocation>East London</Main.MiniBlockBotomLocation>
                            <Main.MiniBlockBotomTitleEat>123</Main.MiniBlockBotomTitleEat>
                        </Main.MiniBlockBotom>
                    </Main.MianBlock.Blocks3>
                    <Main.MianBlock.Blocks4>
                        <Main.MianBlockImg4></Main.MianBlockImg4>
                        <Main.MiniBlockBotom>
                            <Main.MiniBlockBotomMainTitle>Corsair Real Estate
                                {like4 ?
                                    <Main.BottonBlockLikeImgTrue onClick={() => setLike4(false)}></Main.BottonBlockLikeImgTrue>
                                    :
                                    <Main.BottonBlockLikeImgFalse onClick={() => setLike4(true)}></Main.BottonBlockLikeImgFalse>
                                }
                            </Main.MiniBlockBotomMainTitle>
                            <Main.MiniBlockBotomLocation>East London</Main.MiniBlockBotomLocation>
                            <Main.MiniBlockBotomTitleEat>123</Main.MiniBlockBotomTitleEat>
                        </Main.MiniBlockBotom>
                    </Main.MianBlock.Blocks4>
                    <Main.MianBlock.Blocks5>
                        <Main.MianBlockImg5></Main.MianBlockImg5>
                        <Main.MiniBlockBotom>
                            <Main.MiniBlockBotomMainTitle>Sequoia Real Estate
                                {like5 ?
                                    <Main.BottonBlockLikeImgTrue onClick={() => setLike5(false)}></Main.BottonBlockLikeImgTrue>
                                    :
                                    <Main.BottonBlockLikeImgFalse onClick={() => setLike5(true)}></Main.BottonBlockLikeImgFalse>
                                }
                            </Main.MiniBlockBotomMainTitle>
                            <Main.MiniBlockBotomLocation>East London</Main.MiniBlockBotomLocation>
                            <Main.MiniBlockBotomTitleEat>123</Main.MiniBlockBotomTitleEat>
                        </Main.MiniBlockBotom>
                    </Main.MianBlock.Blocks5>
                    <Main.MianBlock.Blocks6>
                        <Main.MianBlockImg6></Main.MianBlockImg6>
                        <Main.MiniBlockBotom>
                            <Main.MiniBlockBotomMainTitle>Strive Partners Realty
                                {like6 ?
                                    <Main.BottonBlockLikeImgTrue onClick={() => setLike6(false)}></Main.BottonBlockLikeImgTrue>
                                    :
                                    <Main.BottonBlockLikeImgFalse onClick={() => setLike6(true)}></Main.BottonBlockLikeImgFalse>
                                }
                            </Main.MiniBlockBotomMainTitle>
                            <Main.MiniBlockBotomLocation>East London</Main.MiniBlockBotomLocation>
                            <Main.MiniBlockBotomTitleEat>123</Main.MiniBlockBotomTitleEat>
                        </Main.MiniBlockBotom>
                    </Main.MianBlock.Blocks6>
                </Main.MianBlock>

            </Main>
        </div>
    )
}

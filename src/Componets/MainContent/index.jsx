import React, { useState } from 'react'
import MBox, { Image } from './style'


export default function MainContent() {

    const [result, setResult] = useState('1')

    return (
        <div>
            <MBox>
                <MBox.MainLeft>
                    <MBox.LeftBlockTitle>Find the perfect place to stay with your family</MBox.LeftBlockTitle>
                    <MBox.LeftP>Buying a home is a life-changing experience, so shouldnt your real estate agent be a life changer.</MBox.LeftP>

                    <MBox.HeardBox>
                        <MBox.HeardBoxMenu>
                            <MBox.HeaderBoxMainButtons1 onClick={() => setResult('1')} type='1' ><span style={result === '1' ? { color: 'red', padding: '20% 20px', background: 'rgb(216, 210, 210)', borderTopLeftRadius: '10px',borderTopRightRadius: '10px' } : { color: '#030A1B' }}>Buy</span></MBox.HeaderBoxMainButtons1>
                            <MBox.HeaderBoxMainButtons2 onClick={() => setResult('2')} type='2' ><span style={result === '2' ? { color: 'red', padding: '20% 20px', background: 'rgb(216, 210, 210)', borderTopLeftRadius: '10px',borderTopRightRadius: '10px' } : { color: '#030A1B' }}>Rent</span></MBox.HeaderBoxMainButtons2>
                            <MBox.HeaderBoxMainButtons3 onClick={() => setResult('3')} type='3' ><span style={result === '3' ? { color: 'red', padding: '20% 20px', background: 'rgb(216, 210, 210)', borderTopLeftRadius: '10px',borderTopRightRadius: '10px' } : { color: '#030A1B' }}>Sell</span></MBox.HeaderBoxMainButtons3>
                        </MBox.HeardBoxMenu>
                        <MBox.HeaderBoxMainPages>
                            {result === '1' &&
                                <MBox.HeardBoxPages1>

                                    <MBox.HeardBoxPages1InsetBox1>
                                        <MBox.MainBoxSelect>
                                            <MBox.MainBoxOptions>Location</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>Andijon</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>Namangan</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>Fargona</MBox.MainBoxOptions>
                                        </MBox.MainBoxSelect>
                                        <MBox.HeaderP>Dhaka</MBox.HeaderP>
                                    </MBox.HeardBoxPages1InsetBox1>

                                    <MBox.HeardBoxPages1InsetBox2>
                                        <MBox.MainBoxSelect>
                                            <MBox.MainBoxOptions>Property type</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>1 hona</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>2 hona</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>3 hona</MBox.MainBoxOptions>
                                        </MBox.MainBoxSelect>
                                        <MBox.HeaderP>Duplex</MBox.HeaderP>
                                    </MBox.HeardBoxPages1InsetBox2>
                                    <MBox.HeardBoxPages1InsetBox3>
                                        <MBox.MainBoxSelect>
                                            <MBox.MainBoxOptions>Price</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>$40000 - $60000</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>$60000 - $80000</MBox.MainBoxOptions>
                                            <MBox.MainBoxOptions>$80000 - $100000</MBox.MainBoxOptions>
                                        </MBox.MainBoxSelect>
                                        <MBox.HeaderP>$4000-$8000</MBox.HeaderP>
                                    </MBox.HeardBoxPages1InsetBox3>
                                    <MBox.HeardBoxPages1InsetBox4>

                                        <MBox.HeaderButton>Search</MBox.HeaderButton>
                                    
                                    </MBox.HeardBoxPages1InsetBox4>

                                </MBox.HeardBoxPages1>}
                            {result === '2' && <MBox.HeardBoxPages1>2</MBox.HeardBoxPages1>}
                            {result === '3' && <MBox.HeardBoxPages1>3</MBox.HeardBoxPages1>}
                        </MBox.HeaderBoxMainPages>
                    </MBox.HeardBox>

                </MBox.MainLeft>
                <MBox.MainRight>
                    <Image></Image>
                </MBox.MainRight>
            </MBox>
        </div>
    )
}

import styled from "styled-components";
import img1 from '../../Assets/popularProperties/1.png'
import img2 from '../../Assets/popularProperties/2.png'
import img3 from '../../Assets/popularProperties/3.png'
import img4 from '../../Assets/popularProperties/4.png'
import img5 from '../../Assets/popularProperties/5.png'
import img6 from '../../Assets/popularProperties/6.png'

import likeTrue from '../../Assets/like/true.svg'
import likeFalse from '../../Assets/like/false.svg'


const Main = styled.div`
    width: 100%;
    // height: 150px;
    margin-top: 120px;
    
`;
Main.TitileBlock = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;

`;
Main.TitleBlockLeft = styled.div`


`;
Main.TitleBlockRight = styled.div`


`;

Main.title = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 66px;
    color: #030A1B;
    text-align: left;

`;

Main.titleMini = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #FE753F;
    cursor: pointer;

`;


Main.MianBlock = styled.div`
    width: 100%;
    height: 1100px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 30px 0px;
`;

Main.MianBlock.Blocks1 = styled.div`
    display: grid;
    grid-template-rows: 321px 183px;
    grid-template-columns: 1fr;
    background-color: #fff;
    border-radius: 10px;
`;
Main.MianBlock.Blocks2 = styled.div`
    display: grid;
    grid-template-rows: 321px 183px;
    grid-template-columns: 1fr;
    background-color: #fff;
    border-radius: 10px;


`;
Main.MianBlock.Blocks3 = styled.div`
    display: grid;
    grid-template-rows: 321px 183px;
    grid-template-columns: 1fr;
    background-color: #fff;
    border-radius: 10px;


`;
Main.MianBlock.Blocks4 = styled.div`
    display: grid;
    grid-template-rows: 321px 183px;
    grid-template-columns: 1fr;
    background-color: #fff;
    border-radius: 10px;


`;
Main.MianBlock.Blocks5 = styled.div`
    display: grid;
    grid-template-rows: 321px 183px;
    grid-template-columns: 1fr;
    background-color: #fff;
    border-radius: 10px;


`;
Main.MianBlock.Blocks6 = styled.div`
    display: grid;
    grid-template-rows: 321px 183px;
    grid-template-columns: 1fr;
    background-color: #fff;
    border-radius: 10px;


`;
Main.MianBlockImg1 = styled.img.attrs({
    src: `${img1}`
})`
    width: 100%;
    height: 321px;
`;
Main.MianBlockImg2 = styled.img.attrs({
    src: `${img2}`
})`
    width: 100%;
    height: 321px;
`;
Main.MianBlockImg3 = styled.img.attrs({
    src: `${img3}`
})`
    width: 100%;
    height: 321px;
`;
Main.MianBlockImg4 = styled.img.attrs({
    src: `${img4}`
})`
    width: 100%;
    height: 321px;
`;
Main.MianBlockImg5 = styled.img.attrs({
    src: `${img5}`
})`
    width: 100%;
    height: 321px;
`;
Main.MianBlockImg6 = styled.img.attrs({
    src: `${img6}`
})`
    width: 100%;
    height: 321px;
`;


Main.MiniBlockBotom = styled.div`
    padding: 30px;
`
Main.MiniBlockBotomMainTitle = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #030A1B;
    margin: 7px;
`;
Main.MiniBlockBotomLocation = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #030A1B;
    opacity: 0.7;
    margin: 7px;
`;
Main.MiniBlockBotomTitleEat = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #030A1B;
    opacity: 0.9;
    margin: 7px;
`;
Main.BottonBlockLikeImgTrue = styled.img.attrs({
    src : `${likeTrue}`
})`
    cursor: pointer;
    margin-left: 10px;
`;
Main.BottonBlockLikeImgFalse = styled.img.attrs({
    src : `${likeFalse}`
})`
    cursor: pointer;
    margin-left: 10px;
`;





export default Main

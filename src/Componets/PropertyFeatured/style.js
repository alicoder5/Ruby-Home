import styled from "styled-components"
import img1 from '../../Assets/propertyFeatured/1.png'
import img2 from '../../Assets/propertyFeatured/2.png'
import img3 from '../../Assets/propertyFeatured/3.png'
import img4 from '../../Assets/propertyFeatured/4.png'
import img5 from '../../Assets/propertyFeatured/5.png'
import img6 from '../../Assets/propertyFeatured/6.png'
import Mainimg from '../../Assets/propertyFeatured/main.png'

const Main = styled.div`
    width: 100%;
    height: 1000px;
    // background: #F9F9F9;
    padding-bottom: 70px;
`;
Main.Title = styled.p`
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 66px;
    color: #030A1B;
    margin-top: 70px;
    margin-bottom: 10px;
`;
Main.MiniP = styled.div`
    width: 730px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin: 0px auto;
`;

Main.BlocksGrid = styled.div`
    width: 100%;
    height: 79%;
    margin-top: 70px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
`;

Main.BlocksGridLeftBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 30px;
`;
Main.BlocksGridCenterBlock = styled.div`
    display: grid;
    align-items: end;
`;
Main.BlocksGridRightBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 30px;
`;
Main.BlocksGridAllBlocks = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    width: 362px;
    padding: 25px;
`;

Main.BlockGridImg1 = styled.img.attrs({
    src : `${img1}`
})``;
Main.BlockGridImg2 = styled.img.attrs({
    src : `${img2}`
})``;
Main.BlockGridImg3 = styled.img.attrs({
    src : `${img3}`
})``;
Main.BlockGridImg4 = styled.img.attrs({
    src : `${img4}`
})``;
Main.BlockGridImg5 = styled.img.attrs({
    src : `${img5}`
})``;
Main.BlockGridImg6 = styled.img.attrs({
    src : `${img6}`
})``

Main.BlocksGridBlocksTitle = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #030A1B;
    margin: 10px 0px;
`;
Main.BlocksGridBlocksMini = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #030A1B;
    opacity: 0.7;
    margin: 10px 0px;

`;

Main.BlocksGridCenterBlockImg = styled.img.attrs({
    src : `${Mainimg}`
})`
    width: 100%;
    height: 548px;
`;





export default Main;
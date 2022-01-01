import styled from "styled-components";
import Img1 from '../../Assets/ourPartnes/1.png'
import Img2 from '../../Assets/ourPartnes/2.png'
import Img3 from '../../Assets/ourPartnes/3.png'
import Img4 from '../../Assets/ourPartnes/4.png'
import Img5 from '../../Assets/ourPartnes/5.png'


const Main = styled.div`
    width: 100%;
    height: 201px;
    margin-top: 97px;
    display: grid;
    grid-template-rows: 66px 140px;
`;
Main.mainTitle = styled.p`
    font-family: Poppins;
    font-style: normal;66
    font-weight: 600;
    font-size: 44px;
    line-height: 66px;
    color: #030A1B;
    text-align: center;
`;
Main.BoxKat = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const MainBox1Img = styled.img.attrs({
    src : `${Img1}`
})``;
export const MainBox2Img = styled.img.attrs({
    src : `${Img2}`
})``;

export const MainBox3Img = styled.img.attrs({
    src : `${Img3}`
})``;

export const MainBox4Img = styled.img.attrs({
    src : `${Img4}`
})``;

export const MainBox5Img = styled.img.attrs({
    src : `${Img5}`
})``;


Main.BoxKat.Box1 = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    

`;
Main.BoxKat.Box2 = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    

`;
Main.BoxKat.Box3 = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    

`;
Main.BoxKat.Box4 = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    

`;
Main.BoxKat.Box5 = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    

`;




export default Main
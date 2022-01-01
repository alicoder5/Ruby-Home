import styled from "styled-components";
import ImgRight from '../../Assets/main.png'

const MBox = styled.div`
    width: 100%;
    height: 615px;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 596px 484px;
    
`;
MBox.MainLeft = styled.div`

    padding-top: 30px;
    padding-right: 25px;
    z-index: 99;

`;
MBox.MainRight = styled.div`

`;

export const Image = styled.img.attrs({
    src: `${ImgRight}`
})``;


MBox.LeftBlockTitle = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 61px;
    line-height: 120%;
    color: #030A1B;
`;
MBox.LeftP = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #030A1B;
    opacity: 0.7;
    margin-top: 30px;

`;
MBox.HeardBox = styled.div`
    width: 842px;
    height: 181px;
    z-index: 999;
`;
MBox.HeardBoxMenu = styled.div`
    width: 30%;
    height: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 999999;
`;
MBox.HeaderBoxMainButtons1 = styled.button`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #030A1B;
    opacity: 0.7;
    border: 0px;
    padding: 0px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    height: 50px;
`;
MBox.HeaderBoxMainButtons2 = styled.button`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #030A1B;
    opacity: 0.7;
    border: 0px;
    padding: 0px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);


`;
MBox.HeaderBoxMainButtons3 = styled.button`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #030A1B;
    opacity: 0.7;
    border: 0px;
    padding: 0px;
    cursor: pointer;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0);


`;

MBox.HeaderBoxMainPages = styled.div`
    width: 100%;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: -1;
`;
MBox.HeardBoxPages1 = styled.div`
    width: 100%;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
`;

MBox.HeardBoxPages1InsetBox1 = styled.div`
    padding-top: 30px;
`;

MBox.HeardBoxPages1InsetBox2 = styled.div`
    padding-top: 30px;


`;
MBox.HeardBoxPages1InsetBox3 = styled.div`
    padding-top: 30px;
    
`;
MBox.HeardBoxPages1InsetBox4 = styled.div`
    padding-top: 30px;

`;

MBox.MainBoxSelect = styled.select`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #030A1B;
    opacity: 0.7;
    border: 0px;
    background-color: rgba(255, 255, 255, 0);
    border-left: 1px solid black;
    padding-left: 15px;
`;
MBox.MainBoxOptions = styled.option`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #030A1B;
    opacity: 0.7;
    border: 0px;
    background-color: rgba(255, 255, 255, 0);

`;


// MBox.HeardBoxPages1InsetBox1Div1 = styled.`
//     border: 1px solid red;
// `;
// MBox.HeardBoxPages1InsetBox1Div2 = styled.div`
//     border: 1px solid red;
// `;
// MBox.HeardBoxPages1InsetBox1Div3 = styled.div`
//     border: 1px solid red;
// `;
// MBox.HeardBoxPages1InsetBox1Div4 = styled.div`
//     border: 1px solid red;
// `;




MBox.HeardBoxPages2 = styled.div`
    width: 100%;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;
MBox.HeardBoxPages3 = styled.div`
    width: 100%;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;


MBox.HeaderP = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    color: #030A1B;
    margin-top: 15px;
    margin-left: 10px;

`;
MBox.HeaderButton = styled.button`
    margin: 10px;
    margin-left: 60px;
    background: #2E6EFF;
    border-radius: 10px;
    border: 0;
    width: 120px;
    height: 54px; 
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;

`;






export default MBox;
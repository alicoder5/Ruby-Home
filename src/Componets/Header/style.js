import { hover } from "@testing-library/user-event/dist/hover";
import styled, { css } from "styled-components";
import HeaderLogo from '../../Assets/headerLogo/HeaderLogo.png'

export const Image = styled.img.attrs({
    src: `${HeaderLogo}`
})``;

const dBorder = css`
    

`
const defCentre = css`
    display: grid;
    justify-content: start;
    align-items: center;

`;

const MainHeader = styled.div`
    height: 100px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 450px 50px 82px 80px 36px 150px;
    grid-template-rows: 1fr;
    grid-gap: 50px;
        

`;

MainHeader.Box1 = styled.div`
    ${dBorder}
    display: grid;
    justify-content: start;
    align-items: center;

`;

MainHeader.Box2 = styled.div`
    ${defCentre}


`;

MainHeader.Box3 = styled.div`
    ${defCentre}

`;

MainHeader.Box4 = styled.div`
    ${defCentre}

`;

MainHeader.Box5 = styled.div`
    ${defCentre}

`;

MainHeader.Box6 = styled.div`
    ${defCentre}

`;

MainHeader.littleTexts = styled.a`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FE753F;
    cursor: pointer;
`;

MainHeader.HeaderButtom = styled.button`
    width: 150px;
    height: 54px;
    background-color: #2E6EFF;
    border-radius: 5px;
    color: #fff;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border: 0px;
    cursor: pointer;
`;


















export default MainHeader;
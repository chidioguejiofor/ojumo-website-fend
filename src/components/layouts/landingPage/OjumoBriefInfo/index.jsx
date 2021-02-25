import React from 'react';
import styled from '@emotion/styled';
import __fonts from '../../../../settings/__font_sizes';
import Header from '../../../molecules/Header';
import __devices from '../../../../settings/__devices';
import {BRAND_WHITE} from '../../../../settings/__colors';

export default function OjumoBriefInfo(){

    return (
        <OjumoBriefInfo.Image>
            <OjumoBriefInfo.Wrapper >
                <Header/>
                <OjumoBriefInfo.Body>
                    <h1>
                    OJUMO IN YORUBA MEAN "A NEW DAWN".
                    </h1>
                    <p>
                        Ojumo aims to complement the academic, cultural and social education students
                        receive from the tertiary institutions with a strong moral formation.
                    </p>
                </OjumoBriefInfo.Body>
            </OjumoBriefInfo.Wrapper>
        </OjumoBriefInfo.Image>


    )
}
OjumoBriefInfo.Image = styled.div`
        background: url(https://res.cloudinary.com/maintenance-site/image/upload/w_400/v1575475798/image.jpg) no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        height: 100vh;
        
   
        @media only screen and (max-width: ${__devices.small}) and (max-height: ${__devices.large}){
            height: initial;
    }
     
`;


OjumoBriefInfo.Body = styled.div`
    margin-top: 10%;
    margin-left: 11%;
    h1{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: ${__fonts.medium};
        line-height: 51px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        width: 740px;
        color: ${BRAND_WHITE};
    }
    
    p{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        width: 694px;
        color: #FFFFFF;
        margin-top: 2em;
    }
    @media only screen and (max-width: ${__devices.large}){
        margin: 0;
        margin-top: 15%;
        h1, p{
            width: 100%;
            text-align: center;
        }
        h1{
            font-size: 2.0em;
        }
    }
    
    
    @media only screen and (max-width: ${__devices.small}) and (max-height: ${__devices.large}){
            margin: 25% 2rem;
    }

`;


OjumoBriefInfo.Wrapper = styled.div`
    z-index: 10;
    background:rgba(46, 77, 113, 0.61);
    height:100%;
    padding: 1.3em 1em;
    @media only screen and (max-width: ${__devices.small}) and (max-height: ${__devices.large}){
        padding: 1.3em 0;
    }
`;




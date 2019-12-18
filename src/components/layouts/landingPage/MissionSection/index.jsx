import React from 'react';
import styled from '@emotion/styled';
import HeadingText from '../../../atoms/HeadingText';
import Paragraph from '../../../atoms/Paragraph';
import HowWeAchieveCards from './HowWeAchieveCards'
import __devices from '../../../../settings/__devices';
import {BRAND_WHITE} from '../../../../settings/__colors';

const BOY_WITH_FACECAP_URL ='https://res.cloudinary.com/maintenance-site/image/upload/v1575914715/some.jpg';
export default function MissionSection(){
    return (
        <MissionSection.Wrapper>
            <MissionSection.MissionStatement>
                <MissionSection.MissionText>
                    <HeadingText responsiveAlign="center">Our Mission</HeadingText>
                    <Paragraph width="70%" >
                        Vivamus iaculis ante volutpat purus commodo consectetur. Nullam tortor elit, tincidunt eleifend
                        nulla nec, consectetur luctus dui.
                        Pellentesque rutrum pulvinar sem, at interdum nulla sollicitudin et.
                    </Paragraph>
                    <Paragraph width="70%">
                        Vivamus iaculis ante volutpat purus commodo consectetur. Nullam tortor elit, tincidunt eleifend
                        nulla nec, consectetur luctus dui.
                        Pellentesque rutrum pulvinar sem, at interdum nulla sollicitudin et.
                    </Paragraph>
                </MissionSection.MissionText>
                <MissionSection.Image/>
            </MissionSection.MissionStatement>

            <div id="triangle">

            </div>
            <MissionSection.HowWeAchieve>
                <HeadingText align="center">
                    How we achieve the mission
                </HeadingText>
                <HowWeAchieveCards/>
            </MissionSection.HowWeAchieve>
            <div>Here we go</div>
        </MissionSection.Wrapper>
    )

}

MissionSection.HowWeAchieve = styled.div`
   background-color: ${BRAND_WHITE};
   font-size: 0.9em;
   padding-bottom: 3em;
   @media only screen and (max-width: ${__devices.small}){
        padding-top: 15% ;
   }
`;

MissionSection.MissionStatement = styled.div`
      display: flex;
      justify-content: space-around;
      @media only screen and (max-width: ${__devices.small}){
        display: block;
      }
`;

MissionSection.MissionText = styled.div`
    width: 40%;
    margin-left: 17%;
    padding-top: 6%;

    > *{
        margin-bottom: 1.5em;

    }
     @media only screen and (max-width: ${__devices.small}){
        width: 100%;
        margin:0;
        margin-top: 3%;
        text-align:center;
        p{
            width: 90%;
            padding: 0 5%;
        }
    }
`;

MissionSection.Wrapper = styled.div`
    background-color: #FFF;
    width: 100vw;
    min-height: auto;

    #triangle {
        width: 0;
        height: 0;
        border-bottom: 100px solid ${BRAND_WHITE};
        border-left: 100vw solid transparent;
        position: relative;
        margin-top: -4em;
    }

    @media only screen and (max-width: ${__devices.small}){
        #triangle {
           display: none;
         }
    }
`;

MissionSection.Image = styled.div`
   background: url(${BOY_WITH_FACECAP_URL}) no-repeat;
   background-position: center center;
   background-size: cover;
   width: 60%;
   height: 70vh;
   @media only screen and (max-width: ${__devices.small}){
        display: none;
   }
`;

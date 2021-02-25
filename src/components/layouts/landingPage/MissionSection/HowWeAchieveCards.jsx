import React from 'react';
import styled from '@emotion/styled';
import MissionCard from '../../../molecules/MissionCard';
import __devices from '../../../../settings/__devices';

const GET_TOGETHER_IMG_URL ='https://res.cloudinary.com/maintenance-site/image/upload/v1575982501/meeting.png';
const SKILL_IMG_URL ='https://res.cloudinary.com/maintenance-site/image/upload/v1575982501/skill.png';
const RECOLLECTION_IMG_URL ='https://res.cloudinary.com/maintenance-site/image/upload/v1575982501/prayer.png';
export default function HowWeAchieveCards(){
    const cardsContent = [
        {
            background: GET_TOGETHER_IMG_URL,
            heading: "GET TOGETHER",
            paragraphText:`
                     One of the key problems that youths have today is a source of inspiration.
                     We help solve this by organising formal and informal meet ups with giants from several fields
                     to boost personal and professional development of the boys.
            `
        },
         {
            background: SKILL_IMG_URL,
            heading: "EMPOWERMENT",
            paragraphText:`
                    In order to create youths that would make a positive impact in society, you need to give them the necessary skills.
                     We empower the boys with skills like programming, playing musical instrument etc
                            
            `
        },
         {
            background: RECOLLECTION_IMG_URL,
            heading: "RECOLLECTION",
            paragraphText:`
                     In order to create youths that would make a positive impact in society, you need to give them the necessary skills.
                     We empower the boys with skills like programming, playing musical instrument etc
            `
        },

    ];
    return (
        <HowWeAchieveCards.Wrapper>
            {cardsContent.map(cardInfo=>(
                <MissionCard
                    backgroundURL={cardInfo.background}
                    headingText={cardInfo.heading}
                    paragraphText={cardInfo.paragraphText}
                />
            ))}
        </HowWeAchieveCards.Wrapper>

    )

}
HowWeAchieveCards.Wrapper = styled.div`
    display:flex;
    justify-content: space-around;
    width: 80%;
    margin-left: 9%;
    margin-top: 5%;
    @media only screen and (max-width: ${__devices.small}){
        display:block;
        margin: auto;   
        padding: 0;
        width: 90%;

    }
`;

import React from 'react';
import styled from '@emotion/styled';
import HeadingText from '../../atoms/HeadingText';
import Paragraph from '../../atoms/Paragraph';
import Image from '../../atoms/Image';
import __devices from '../../../settings/__devices';
export default function MissionCard({backgroundURL, headingText, paragraphText}){
    return (
         <MissionCard.Container>

            <Image backgroundURL={backgroundURL}
                imgWidth="5em" imgHeight="5em"
                   imgMargin="auto"
                   showInSmallScreen={true}
            />
            <MissionCard.TextWrapper>
                    <HeadingText align="center" color="BRAND_PRIMARY_BLUE">
                        {headingText}
                    </HeadingText>
                    <div className="p-container">
                        <Paragraph
                            width="100%"
                            margin="9% 0 0 0"
                            align="center"
                            responsiveMargin="0 0 0 5%"

                        >
                        {paragraphText}
                        </Paragraph>
                    </div>


            </MissionCard.TextWrapper>


         </MissionCard.Container>
    )

}

MissionCard.TextWrapper = styled.div`
     padding-top: 10%;
`
MissionCard.Container = styled.div`
 
width: 100%;
background-color: white;
padding: 5% 3%;
margin-left: 3%;
p{
   margin-top: 9%;

}
margin-bottom: 2em;


       
   
@media only screen and (max-width: ${__devices.small}){
       
    margin: 0;
    margin-bottom: 2em;
    p{
        width: 90%;
    }
   padding-top: 10%;
   padding-bottom: 10%;
    
        
}
`;




import React from 'react';
import styled from '@emotion/styled';
import Paragraph from '../../../atoms/Paragraph';
import Image from '../../../atoms/Image';
import FooterSection from './FooterSection';
import FooterLinks from './FooterLinks';
import __colors from '../../../../settings/__colors';
import __devices from '../../../../settings/__devices';


const LOCATION_ICON_LINK='https://res.cloudinary.com/maintenance-site/image/upload/v1577103376/Vector.png';
const PHONE_ICON_LINK='https://res.cloudinary.com/maintenance-site/image/upload/v1577104780/Group.png';

export default function Footer(){
    return (
        <Footer.Container>
            <FooterSection title="About">

                <div>
                    <Paragraph color="BRAND_WHITE" width="auto" fontSize="xSmall">
                        Vivamus iaculis ante volutpat purus commodo consectetur. Nullam tortor elit, tincidunt eleifend
                        nulla nec,
                        consectetur luctus dui. Pellentesque rutrum pulvinar sem, at interdum nulla sollicitudin
                        et. Fusce pharetra vel mauris id viverra. Sed ut suscipit leo. Aenean eget dui semper,
                        pulvinar orci eget, finibus mi.
                    </Paragraph>
                </div>
                <div className="non-res-only">
                    <Paragraph color="BRAND_WHITE" width="auto" fontSize="xSmall">
                        Copyright @2019 All rights reserved.
                    </Paragraph>
                </div>
            </FooterSection>

            <FooterSection title="Quick Links" showOnMobile={false}>
                <FooterLinks/>
            </FooterSection>

            <FooterSection title="Visit or Talk to Us" width="55%">

                <div className="icon-list">
                    <div>
                        <Image showInSmallScreen imgHeight="30px" imgWidth="30px" backgroundURL={LOCATION_ICON_LINK}
                               backgroundSize="contain"/>
                        <div>
                            <Paragraph fontSize="small" width="100%">
                                739 Babatunde Atere Omole Phase II, Lagos
                            </Paragraph>

                        </div>
                    </div>
                    <div>
                        <Image showInSmallScreen imgHeight="30px" imgWidth="30px" backgroundURL={PHONE_ICON_LINK}
                               backgroundSize="contain"/>
                        <div>
                            <Paragraph fontSize="small" width="100%">
                                some-email@email.com
                            </Paragraph>

                        </div>
                    </div>

                </div>


            </FooterSection>

            <div className="res-only">
                <Paragraph color="BRAND_WHITE" width="auto" fontSize="xSmall">
                    Copyright @2019 All rights reserved.
                </Paragraph>
            </div>
        </Footer.Container>
    )

}


Footer.Container = styled.div`
      background-color:${__colors.BRAND_PRIMARY_BLUE};
      height: auto;
      display: flex;
      align-items: space-between;
      width: 66%;
      .res-only{
            display:none;
      }
      padding: 4% 17%;
      .icon-list > div{
            color: white;
            display: flex;
           > *{
            color:white;
            margin-right: 5%
          }
      }
      
      .icon-list > div > div,.icon-list > div  div > * {
        margin-top: 0;
      }
      
      
      @media only screen and (max-width: ${__devices.small}){
            display: block;
            padding: 10% 5%;
            width: 90%;
           
            .non-res-only{
                display: none;
            }
            .res-only{
                display:block;
            }
            text-align: center;
            
      }
      
`;

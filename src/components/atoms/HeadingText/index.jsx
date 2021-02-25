import React from 'react';
import styled from '@emotion/styled';
import __fonts from '../../../settings/__font_sizes';
import __colors from '../../../settings/__colors';
import __devices from '../../../settings/__devices';
import {BRAND_PRIMARY_BLUE,BRAND_PURPLE} from '../../../settings/__colors';


export default  function HeadingText(
    {
        children,
        align='inherit',
        responsiveAlign,
        color,
        fontSize
    }){
    return (

        < HeadingText.Text fontSize={fontSize} color={color} align={align} responsiveAlign={responsiveAlign} >
            {children}
        </HeadingText.Text>
    )

}


HeadingText.Text = styled.h1`
    font-size: ${props=> props.fontSize || '1.5em'} ;
    font-family: Montserrat;
    letter-spacing: 0.1em;
    color: ${props=> __colors[props.color] || __colors.BRAND_PURPLE};
    font-weight: bold; 
    text-align:   ${props=> props.align};
    @media only screen and (max-width: ${__devices.small}){
        text-align:${props=> props.responsiveAlign || props.align };
    }
`;


// h1{
//         font-family: Montserrat;
//         font-style: normal;
//         font-weight: bold;
//         font-size: ${__fontSizes.normal};
//         line-height: 20px;
//         display: flex;
//         align-items: center;
//         color: ${__colors.BRAND_PRIMARY_BLUE};
//         margin-top: 5%;
//         width: 80%;
//     }

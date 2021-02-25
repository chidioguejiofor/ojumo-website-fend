import React from 'react';
import styled from '@emotion/styled';
import HeadingText from 'Atoms/HeadingText';
import Paragraph from 'Atoms/Paragraph';
import Image from 'Atoms/Image';
import __fontSizes from 'FontSizes';
import __devices from 'Devices';

const ArticlesSection = () => {
  const HBR_IMAGE =
    'https://hbr.org/resources/images/article_assets/2016/07/jul16-29-500344266.jpg';
  const REMOTE_WORK =
    'https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/ugbsuvtop0-fpwkuvtxc_q.jpg';

    const CAREER_CHOICE='https://res.cloudinary.com/mensaiah/image/upload/v1613378834/steps-to-choosing-career-525506_FINAL-5c536bbbc9e77c0001329194_fhgskc.webp'
  const articles = [
    {
      imageURL: HBR_IMAGE,
      title: 'If You’re Not Outside Your Comfort Zone, You Won’t Learn Anything',
      description:`
      You need to speak in public, but your knees buckle even before you reach the podium. You want to expand your network, but you’d rather swallow nails than make small talk with strangers...`,
      url: 'https://hbr.org/2016/07/if-youre-not-outside-your-comfort-zone-you-wont-learn-anything?utm_source=linkedin&utm_campaign=hbr&utm_medium=social',
      authorAndDate: 'July 29, 2016 By Andy Molinsky',
    },
    {
      imageURL: CAREER_CHOICE,
      title: 'How to Make a Career Choice When You Are Undecided',
      description:`
      With thousands of options, how will you choose a career that's right for you? If you don't have any idea what you want to do, the task may seem insurmountable. Fortunately, it isn't. Follow an organized process and you will increase your chances of making a good decision.
      `, 
      url:"https://www.thebalancecareers.com/steps-to-choosing-career-525506",
       authorAndDate: '20th November 2019 BY DAWN ROSENBERG MCKAY',
    },
    {
        imageURL: REMOTE_WORK,
        title: 'Can young people thrive in a remote-work world?',
        description:`
        The pandemic quashed the experience of learning in a traditional office. 
        Can younger workers grow in the same way while working at their kitchen tables?
        `, 
        url:"https://www.bbc.com/worklife/article/20201023-can-young-people-thrive-in-a-remote-work-world",
         authorAndDate: '28th October 2020 By Sam Blum',
      }

  ];
  return (
    <ArticlesSection.Wrapper>
            <HeadingText responsiveAlign="center">Articles</HeadingText>
            <ArticlesSection.ArticleContainer>

                {articles.map((element, index)=>(
                    <div key={index}>
 
                           {/* <Image
                            showInSmallScreen  imgHeight="20rem" imgWidth="30em" backgroundURL={element.imageURL}
                                   backgroundSize="contain" responsiveWidth="100%"/>  */}
<img src={element.imageURL} alt="Article Image"/>
                        
                       <div className="text-heading">
                           <HeadingText responsiveAlign="left" color="BRAND_BLACK">{element.title.toUpperCase()}</HeadingText>
                       </div>

                        <Paragraph className="text">
                           {element.authorAndDate.toUpperCase()}
                        </Paragraph>
                         <div className="p-wrapper">
                             <Paragraph >{element.description}</Paragraph>
                        </div>
                        <div className="read-more">
                            <a  target="_blank" rel="noopener noreferrer" href={element.url}>
                                 Read More ...
                            </a>
                        </div>
                    </div>
                ))}

            </ArticlesSection.ArticleContainer>
        </ArticlesSection.Wrapper>
  );
};

ArticlesSection.ArticleContainer = styled.div`
/* display: flex; */
display:grid;
grid-template-columns:repeat(3, 1fr);
gap:1rem;

img{
    width:100%;
    height: 20rem;
    object-fit:cover;
}
> div{
    width: 100%;
    height: 100%;
    margin-bottom:1rem;
}

.text-heading{
    /* height: 4.375em; */
    /* margin-bottom:1rem; */
    margin:1rem 0;
}
.img{
    width:100%;
    height:100%;
}
.p-wrapper{
    padding-top: 3%;
    width: 90%;
    height: 6.1em;
    overflow: hidden;
}

.read-more{
    >a{
        color: #DFB071;
        text-decoration: none;
        font-weight: bold;
        font-family: Lato;

        &:hover{
            text-decoration: underline;
        }
    }

    padding-top:3%;
}

@media only screen and  (max-width: ${__devices.medium}){
    /* flex-wrap: wrap; */
    display: block;
    .text-heading{
    /* height: 4.375em; */
    font-size:${__fontSizes.small}
}

}

`;

ArticlesSection.Wrapper = styled.div`
 padding: 4% 6% 4% 6% ;
background-color: #FFF6F6;

h1{
    margin-bottom:1rem;
}
@media only screen and  (max-width: ${__devices.xSmall}){
    padding: 5% 3%;
    .container{
        display: block;

    }
}
`;

export default ArticlesSection;

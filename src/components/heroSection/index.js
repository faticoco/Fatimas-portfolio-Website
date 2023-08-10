import React from 'react';
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect";
import portfolio from "../../images/portfolio.jpg";
import HeroBgAnimation from "../HeroBgAnimation";

 import { HeroBg , HeroInnerContainer , HeroRightContainer , HeroLeftContainer , HeroContainer , Title , TextLoop  , SubTitle , ResumeButton , Img , Span} from './HeroStyle';
const Hero=()=>
{
    return(
        <div id="about">
            <HeroContainer>
                            <HeroBg>
                                        <HeroBgAnimation/>
                            </HeroBg>

                            <HeroInnerContainer>
                                             <HeroLeftContainer>
                                                <Title>
                                                    Hi, I am <br /> {Bio.name}

                                                </Title>

                                                <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                                                <SubTitle>
                                                    {Bio.description}
                                                </SubTitle>
                                                <ResumeButton href={Bio.resume} target="display" > Check Resume</ResumeButton>
                                            </HeroLeftContainer>

                                            <HeroRightContainer>
                                                                <Img src={portfolio} alt="Fatima" />
                                            </HeroRightContainer>
                            </HeroInnerContainer>
            </HeroContainer>
        
        </div>
    )
};

export default Hero;


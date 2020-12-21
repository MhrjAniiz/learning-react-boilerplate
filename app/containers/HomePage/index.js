/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import './homepage.css';

import HomeForm from 'components/HomeForm';
import HomeBackground from 'components/HomeBackground/HomeBackground';
import HomePageText from 'components/HomePageTexts/HomePageText';
import InfoBar from 'components/InfoBar';
import Hr from 'components/HR/hr';
import { info } from 'constants/info/info';
import Question from 'components/Question/Question';
import Dropbox from 'components/Dropbox/Dropbox';
import Footer from 'components/footer/footer';

export default function HomePage() {
  return (
    <div>
      <HomeBackground>
        <div className="blackGround">
          <div className="search-container">
            <HomePageText />
            <HomeForm />
          </div>
        </div>
      </HomeBackground>
      <Hr />
      {info.map(result => {
        return (
          <div>
            <InfoBar
              key={result.id}
              heading={result.heading}
              paragraph={result.paragraph}
              img={result.img}
              reverse={result.reverse}
              videoSrc={result.videoSrc}
              videoClass={result.videoClass}
            />
            <Hr />
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

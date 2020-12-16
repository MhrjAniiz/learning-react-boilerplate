/**
 *
 * InfoBar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import './infobar.css';
import { SyncOutlined } from '@ant-design/icons';

function InfoBar({ heading, paragraph, img, reverse, videoSrc, videoClass }) {
  return (
    <div className={`info_body ${reverse}`}>
      <div className="info_card">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="vid">
        <img className="template" src={img} alt="" />
        {videoClass === '#' ? (
          <div className="banner">
            <img
              className="thumbnail"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
            />
            <div className="text">
              <h3>Stranger Things</h3>
              <p>Downloading ... </p>
            </div>
            <SyncOutlined style={{ fontSize: '20px', color: 'red' }} spin />
          </div>
        ) : (
          <video
            className={`video-media ${videoClass}`}
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

InfoBar.propTypes = {};

export default memo(InfoBar);

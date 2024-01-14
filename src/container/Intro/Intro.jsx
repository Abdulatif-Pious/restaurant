import React from 'react';


import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  return (
    <div className="app__video  section__padding">
      <video
        src={meal}
        type="video/mp4"
        loop
        muted
        autoPlay
      />
    </div>
  );
};

export default Intro;

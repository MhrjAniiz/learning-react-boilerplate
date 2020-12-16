import React from 'react';
import './Questions.css';
import Dropbox from '../Dropbox/Dropbox';

function Question() {
  return (
    <div className="question_body">
      <h1 className="header">Frequently Asked Questions</h1>
      <Dropbox />
    </div>
  );
}

export default Question;

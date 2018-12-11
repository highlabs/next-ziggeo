import React, { Component } from 'react';
import { ZiggeoRecorder } from 'react-ziggeo';

export class Ziggeo extends Component {
  render() {
    return (
      <ZiggeoRecorder
        apiKey="API_KEY"
        onlyaudio={true}
        height={180}
        width={320}
      />
    );
  }
}

export default Ziggeo;

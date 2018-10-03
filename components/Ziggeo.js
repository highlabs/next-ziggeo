import React, { Component } from 'react';
import { ZiggeoRecorder } from 'react-ziggeo';

export class Ziggeo extends Component {
  render() {
    return (
      <ZiggeoRecorder
        apiKey={process.env.ZIGGEO_APP_TOKEN}
        height={180}
        width={320}
        onRecording={this.recorderRecording}
        onUploading={this.recorderUploading}
      />
    );
  }
}

export default Ziggeo;

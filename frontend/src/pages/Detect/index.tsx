import React from 'react';
import Container from '../../common/Container';

function App() {
  return (
    <Container>
      <div className="video-container">
        <img src="http://localhost:5000/video_feed" alt="Video Feed" />
      </div>
    </Container>
  );
}

export default App;

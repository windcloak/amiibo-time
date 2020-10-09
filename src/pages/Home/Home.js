import React from 'react';
// import React, { useEffect, useState } from 'react';

// import './Home.scss';
import { Button } from 'react-bootstrap';

function Home() {
    return (
        <div>This is the Home<br/>
<>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</>
</div>
    );
  }
export default Home;

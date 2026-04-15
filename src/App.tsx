import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const images = ['kat (1).jpg', 'kat (2).jpg', 'kat (3).jpg', 'kat (4).jpg', 'kat (5).jpg'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>katkat ohab e ats</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
          {images.map((image) => (
            <div key={image} style={{ textAlign: 'center' }}>
              <img src={`/${image}`} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <h1>kakat gwapa yie gamay olo</h1>
      </header>
    </div>
  );
}

export default App;

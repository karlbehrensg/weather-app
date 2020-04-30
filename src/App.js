import React from 'react';

const api = {
  key: '7d9ca352b3c3ad6f033d4e2cfaa88562',
  base: 'api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;

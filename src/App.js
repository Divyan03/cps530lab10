// src/App.js
import React from 'react';
import './App.css'; // Import your CSS file for styling

function Header() {
  return <h1>Welcome to My React App!</h1>;
}

function MainContent() {
  return (
    <div>
      <p>This is a simple React web page I created.</p>
      <h2>How I built this webpage</h2>
      <p>To create this webpage, I ran the command "npx npm-create-app ." in my terminal to create it in my directory.
        To run this app on my own computer I just used the "npm start" command. I also added a counter button at the bottom
        just to test out some functionalities in React.
      </p>
      <h2>Struggles with Webpage</h2>
      <p>The main struggle I had was hosting the webpage. I decided to host it on Github using Github Pages. Github Pages
        allows me to host public repositories for free. Figuring out how to host a React webpage did take more time.
        To find out all the steps I used, you can click <a href="https://github.com/gitname/react-gh-pages" target="_blank"> here</a>.
      </p>

      <h2>Click to Increment! </h2>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

export default App;

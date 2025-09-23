import { useState } from 'react'
import siteLogo from '/logo.png'
import './App.css'
import Header from './pages/Header.jsx';
import Profile from './pages/Profile.jsx';
import Papers from './pages/Papers.jsx';


/*function App() {
   const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 class="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
          <Profile />
          <Papers />
          </div>
          <div className="lg:col-span-1">
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

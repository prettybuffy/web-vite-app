import { useState } from 'react'
import siteLogo from '/site_logo.png'
import './App.css'
import Header from './pages/Header.jsx';
import Profile from './pages/Profile.jsx';
import Papers from './pages/Papers.jsx';
import Teaching from './pages/Teaching.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-light font-sans text-primary">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
          <Profile />
          <Papers />
          </div>
          <div className="lg:col-span-1">
          <Teaching />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

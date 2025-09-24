import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header.jsx';
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';
import Papers from './pages/Papers.jsx';
import './App.css';

const HomePage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
    <div className="lg:col-span-1">
      <Profile />
    </div>
    <div className="lg:col-span-3">
      <About />
    </div>
  </div>
);

const PublicationsPage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
    <div className="lg:col-span-1">
      <Profile />
    </div>
    <div className="lg:col-span-3">
      <Papers />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 
        font-light text-slate-800">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/papers" element={<PublicationsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

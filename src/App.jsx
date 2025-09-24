import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header.jsx';
import Profile from './pages/Profile.jsx';
import Papers from './pages/Papers.jsx';
import Teaching from './pages/Teaching.jsx';
import './App.css';

const HomePage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <div className="lg:col-span-3">
      <Profile />
    </div>
    <div className="lg:col-span-1">
      <Teaching />
    </div>
  </div>
);

const PublicationsPage = () => (
  <div>
    <Papers />
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
            <Route path="/publications" element={<PublicationsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

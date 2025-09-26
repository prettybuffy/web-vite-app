import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header.jsx';
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';
import Papers from './pages/Papers.jsx';
import Teaching from './pages/Teaching.jsx';
import News from './pages/News.jsx';
import Projects from './pages/Projects.jsx';
import MainLayout from './pages/MainLayout.jsx';
import Footer from './pages/Footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-100 flex flex-col">
        <Header />
        <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 font-light text-slate-800">
          <Routes>
            <Route path="/" element={ <MainLayout sidebar={<Profile />}
                  content={<> <About /> <hr/> <News /> </> } layoutType="home" /> }/>
            <Route path="/papers" element={ <MainLayout sidebar={<Profile />}
                  content={<Papers />} layoutType="papers" /> }/>
            <Route path="/projects" element={ <MainLayout sidebar={<Profile />}
                  content={<Projects />} layoutType="projects" /> }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

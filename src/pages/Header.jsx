import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-neutral-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div>
            <h1 className="px-4 text-3xl font-light">Zainab Iftikhar</h1>
            {/*<p className="px-4 text-sm">Computer Science Ph.D. Student</p>*/}
          </div>
          <div className="text-right">
            <p className="px-4 text-2xl font-light">Brown University</p>
          </div>
        </div>
      </div>
      
      <nav className="bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 font-normal text-slate-800">
            <Link to="/" className="px-4 py-3 hover:text-highlight transition-colors">Home</Link>
            <Link to="/papers" className="px-4 py-3 hover:text-highlight transition-colors">Papers</Link>
            <Link to="/research" className="px-4 py-3 hover:text-highlight transition-colors">Systems</Link>
            <Link to="/teaching" className="px-4 py-3 hover:text-highlight transition-colors">Teaching</Link>
            <Link to="/blog" className="px-4 py-3 hover:text-highlight transition-colors">Blog</Link>
          </div>
        </div>
      </nav>
      <hr class="border-t border-neutral-300" />
    </header>
  );
}
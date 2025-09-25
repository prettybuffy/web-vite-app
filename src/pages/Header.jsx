import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="bg-neutral-800 text-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div>
              <h1 className="text-3xl font-light">Zainab Iftikhar</h1>
              {/*<p className="text-sm">Computer Science Ph.D. Student</p>*/}
            </div>
            <div className="text-right">
              <p className="text-2xl font-light">Brown University</p>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="bg-neutral-100 text-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex font-normal">
            <Link to="/" className="pr-4 py-3 hover:text-highlight transition-colors">Home</Link>
            <Link to="/papers" className="px-4 py-3 hover:text-highlight transition-colors">Papers</Link>
            <Link to="/projects" className="px-4 py-3 hover:text-highlight transition-colors">Projects</Link>
            {/*<Link to="/teaching" className="px-4 py-3 hover:text-highlight transition-colors">Teaching</Link>*/}
          </div>
        </div>
      </nav>
      <hr className="border-t border-neutral-300" />
    </header>
  );
}
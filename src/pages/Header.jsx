import React from 'react';

export default function Header() {
  return (
    <header className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div>
            <h1 className="px-4 text-2xl font-light">Zainab Iftikhar</h1>
            {/*<p className="px-4 text-sm">Computer Science Ph.D. Student</p>*/}
          </div>
          <div className="text-right">
            <p className="px-4 text-2xl font-light">Brown University</p>
          </div>
        </div>
      </div>
      
      <nav className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6">
            <a href="#" className="px-4 py-3 text-black hover:text-lime-600 transition-colors">Home</a>
            <a href="#" className="px-4 py-3 text-black hover:text-lime-600 transition-colors">Research</a>
            <a href="#" className="px-4 py-3 text-black hover:text-lime-600 transition-colors">Teaching</a>
            <a href="#" className="px-4 py-3 text-black hover:text-lime-600 transition-colors">Blog</a>
          </div>
        </div>
      </nav>
      <hr class="border-t border-neutral-300" />
    </header>
  );
}
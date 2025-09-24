import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src="/site_logo.png" alt="Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-primary">Zainab Iftikhar</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-secondary hover:text-accent transition-colors font-medium">Home</a>
            <a href="#" className="text-secondary hover:text-accent transition-colors font-medium">Research</a>
            <a href="#" className="text-secondary hover:text-accent transition-colors font-medium">Teaching</a>
            <a href="#" className="text-secondary hover:text-accent transition-colors font-medium">Blog</a>
          </nav>
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
}
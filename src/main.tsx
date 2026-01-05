import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, MovieDetails } from './components';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-slate-800 to-zinc-900 text-white shadow-lg">
        <header className="p-4 border-b border-zinc-700 shadow-sm">
          <h1 className="text-3xl font-bold text-center">Movies Coming Out in 2026</h1>
        </header>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
        <footer className="p-4 border-t border-zinc-700 text-center">
          <p>© 2026 Movies Archive</p>
        </footer>
      </div>
    </Router>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
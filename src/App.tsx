import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, MovieDetails } from './components';
import { Film } from 'lucide-react';

const movies = [
  {
    id: 1,
    title: "Galactic Expedition",
    releaseDate: "2026-03-15",
    description: "A thrilling journey through the cosmos with unexpected discoveries.",
  },
  {
    id: 2,
    title: "The Last Kingdom",
    releaseDate: "2026-06-22",
    description: "An epic saga of a fallen empire and the heroes that rise from its ashes.",
  },
  {
    id: 3,
    title: "Cyber Revolution",
    releaseDate: "2026-09-10",
    description: "A gripping tale of technology, freedom, and the fight for justice in a digital age.",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-slate-800 to-zinc-900 text-white shadow-lg">
      <header className="p-4 border-b border-zinc-700 shadow-sm flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-100">Movies Coming Out in 2026</h1>
        <Film className="text-slate-100 w-8 h-8" />
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </main>
      <footer className="p-4 border-t border-zinc-700 text-center text-sm text-slate-400">
        &copy; 2026 Movies Coming Out. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
import React from 'react';
import { Trash2, CheckCircle, PlusCircle } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  rating: number;
  description: string;
}

const mockWatchlist: Movie[] = [
  {
    id: 1,
    title: "Galactic Odyssey",
    releaseDate: "2026-03-15",
    rating: 8.7,
    description: "A thrilling journey through the cosmos as a crew of astronauts discover new worlds and face unforeseen challenges.",
  },
  {
    id: 2,
    title: "Cyber City",
    releaseDate: "2026-07-22",
    rating: 9.1,
    description: "In a dystopian future, a detective uncovers a conspiracy that could change the fabric of society.",
  },
];

const Watchlist: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-zinc-800 to-slate-900 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-zinc-100 mb-4">My Watchlist</h2>
      <ul className="space-y-4">
        {mockWatchlist.map(movie => (
          <li key={movie.id} className="flex items-center justify-between p-4 bg-zinc-800 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <div>
              <h3 className="text-xl font-semibold text-zinc-100">{movie.title}</h3>
              <p className="text-zinc-400 text-sm">{movie.releaseDate}</p>
              <p className="text-zinc-400 text-sm">{movie.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-green-400 hover:text-green-500">
                <CheckCircle size={24} />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <Trash2 size={24} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-6 px-4 py-2 bg-zinc-700 text-zinc-100 rounded-md shadow-md hover:bg-zinc-600 transition-colors">
        <PlusCircle size={20} className="inline-block mr-2" />
        Add More Movies
      </button>
    </div>
  );
};

export default Watchlist;
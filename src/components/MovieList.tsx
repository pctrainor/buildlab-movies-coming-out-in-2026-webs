import React from 'react';
import { Film, Calendar, Star } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  rating: number;
  description: string;
}

const mockMovies: Movie[] = [
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
    releaseDate: "2026-06-22",
    rating: 9.1,
    description: "In a future dominated by technology, a detective unravels a conspiracy that could alter the course of humanity.",
  },
  {
    id: 3,
    title: "Mystic Falls",
    releaseDate: "2026-10-30",
    rating: 7.5,
    description: "A group of teenagers uncover the hidden secrets of their seemingly peaceful town and the supernatural forces at play.",
  },
];

const MovieList: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Movies of 2026</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockMovies.map((movie) => (
          <div key={movie.id} className="card">
            <div className="flex items-center mb-2">
              <Film className="text-blue-400 mr-2" size={20} />
              <h3 className="text-xl font-semibold">{movie.title}</h3>
            </div>
            <p className="text-zinc-400 mb-2">{movie.description}</p>
            <div className="flex items-center justify-between text-sm text-zinc-500">
              <div className="flex items-center">
                <Calendar className="mr-1" size={16} />
                <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-1 text-yellow-400" size={16} />
                <span>{movie.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
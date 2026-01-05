import React from 'react';
import { useParams } from 'react-router-dom';
import { Film, Calendar, Star, Info } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  rating: number;
  description: string;
  director: string;
  cast: string[];
}

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Galactic Odyssey",
    releaseDate: "2026-03-15",
    rating: 8.7,
    description: "A thrilling journey through the cosmos as a crew of astronauts discover new worlds and face unforeseen challenges.",
    director: "Ava Nolan",
    cast: ["John Doe", "Jane Smith", "Emily Johnson"]
  },
  {
    id: 2,
    title: "Cyber City",
    releaseDate: "2026-06-22",
    rating: 9.1,
    description: "In a dystopian future, a detective must navigate the sprawling cybernetic metropolis to unravel a conspiracy that threatens humanity.",
    director: "Liam Clarkson",
    cast: ["Michael Brown", "Sarah Connor", "Luke Skywalker"]
  }
];

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = mockMovies.find(movie => movie.id.toString() === id);

  if (!movie) {
    return <div className="text-center text-gray-400">Movie not found</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-zinc-900 to-slate-800 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <div className="flex items-center space-x-4 mb-6">
        <Calendar className="text-purple-500" />
        <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
        <Star className="text-yellow-500" />
        <span>{movie.rating.toFixed(1)} / 10</span>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-300">{movie.description}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Director</h2>
        <p className="text-gray-300">{movie.director}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Cast</h2>
        <ul className="list-disc list-inside text-gray-300">
          {movie.cast.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
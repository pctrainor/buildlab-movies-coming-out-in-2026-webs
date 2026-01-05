import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/movies';

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  rating: number;
  description: string;
  director: string;
  cast: string[];
}

class ApiService {
  static async getMoviesComingOutIn2026(): Promise<Movie[]> {
    try {
      const response = await axios.get<Movie[]>(`${API_BASE_URL}/2026`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  }

  static async getMovieDetails(movieId: number): Promise<Movie> {
    try {
      const response = await axios.get<Movie>(`${API_BASE_URL}/detail/${movieId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching movie details for ID ${movieId}:`, error);
      throw error;
    }
  }
}

export default ApiService;
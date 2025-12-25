import React from 'react';
import MovieCard from './components/MovieCard';

const movies = [
  { title: 'Movie One', image: 'https://via.placeholder.com/150' },
  { title: 'Movie Two', image: 'https://via.placeholder.com/150' },
  { title: 'Movie Three', image: 'https://via.placeholder.com/150' }
];

function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '20px' }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} title={movie.title} image={movie.image} />
      ))}
    </div>
  );
}

export default App;

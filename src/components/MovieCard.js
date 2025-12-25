import React from 'react';

function MovieCard({ title, image }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default MovieCard;

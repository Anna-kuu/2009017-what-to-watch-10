import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FilmDescription = {
  filmsCount: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,1,18,19,20],
  filmName: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  filmYear: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmName={FilmDescription.filmName}
      filmGenre={FilmDescription.filmGenre}
      filmYear={FilmDescription.filmYear}
      filmsCount={FilmDescription.filmsCount}
    />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Film = {
  filmsCount: 20,
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      {...Film}
    />
  </React.StrictMode>,
);

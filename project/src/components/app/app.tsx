import MainScreen from '../../pages/main/main';

type AppScreenProps = {
  filmsCount: number[];
  filmName: string;
  filmGenre: string;
  filmYear: number;
}

function App({filmsCount, filmName, filmGenre, filmYear}: AppScreenProps): JSX.Element {
  return (
    <MainScreen filmsCount={filmsCount} filmName={filmName} filmGenre={filmGenre} filmYear={filmYear}/>
  );
}

export default App;

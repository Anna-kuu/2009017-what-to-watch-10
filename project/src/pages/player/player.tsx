import { useEffect, useRef, useState } from 'react';
import {useParams, Navigate, useNavigate} from 'react-router-dom';
import SpinnerPlayer from '../../components/spinner/spinner';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-data/selectors';
import { getDurationTime } from '../../utils';


export default function Player(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const currentFilm = useAppSelector(getFilms).find((film) => film.id === Number(params.id));

  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const timeLeftFormat = getDurationTime(timeLeft);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const onToggleFullScreenClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress(videoRef.current.currentTime * 100 / videoRef.current.duration);
      setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  if (!currentFilm) {
    return <Navigate to={AppRoute.Root}/>;
  }


  return (
    <div className="player">

      <video ref={videoRef} onTimeUpdate={handleTimeUpdate} src={currentFilm.videoLink} className="player__video" poster="img/player-poster.jpg"></video>
      {isLoading &&
        <SpinnerPlayer />}
      <button onClick={()=> navigate(-1)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeftFormat}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={() => setIsPlaying(!isPlaying)} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isPlaying
                ? <use xlinkHref="#pause"></use>
                : <use xlinkHref="#play-s"></use>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.name}</div>

          <button onClick={onToggleFullScreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

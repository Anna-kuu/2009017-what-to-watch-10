import { useEffect, useRef, useState } from 'react';
import {useParams, Navigate, useNavigate} from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-data/selectors';
//import { durationTime } from '../../utils';

export default function Player(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const currentFilm = useAppSelector(getFilms).find((film) => film.id === Number(params.id));

  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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
    if (videoRef.current) {
      console.log(videoRef.current.duration)
      console.log(videoRef.current.currentTime)
      console.log(videoRef.current.duration - videoRef.current.currentTime)
      console.log(videoRef.current.currentTime * 100 / videoRef.current.duration)
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
      console.log(progress)
    }
  };

  if (!currentFilm) {
    return <Navigate to={AppRoute.Root}/>;
  }
  return (
    <div className="player">
      <video ref={videoRef} onTimeUpdate={handleTimeUpdate} controls src={currentFilm.videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button onClick={()=> navigate(-1)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
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
          <div className="player__name">Transpotting</div>

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

import { FilmInfo } from '../../types/films';
import {useRef, useEffect} from 'react';

type VideoPlayerProps = {
  film: FilmInfo;
  isActive: boolean;
}

export default function VideoPlayer ({film, isActive}:VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      const videoPlayTimeout = setTimeout(() =>
        videoRef.current && videoRef.current.play(),
      1000);

      return () => clearTimeout(videoPlayTimeout);
    }

  }, [isActive]);

  return (
    <video className="player__video" ref={videoRef} src={film.videoLink} poster={film.posterImage} muted/>
  );
}

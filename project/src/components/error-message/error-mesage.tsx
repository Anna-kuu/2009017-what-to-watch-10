import { useAppSelector } from '../../hooks';

export default function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);
  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

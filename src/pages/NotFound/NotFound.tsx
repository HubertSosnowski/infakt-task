import { Link } from 'react-router-dom'

import { Button } from '../../components/UI/Button';

const NotFound = () => (
  <div>
    <h1>Nie znaleziono strony</h1>
    <Link to="/"><Button text='Powrót na stornę główną' /></Link>
  </div>
);

export default NotFound
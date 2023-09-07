import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>Nie znaleziono strony</h1>
    <Link to="/">Powrót na strone główną</Link>
  </div>
);

export default NotFound
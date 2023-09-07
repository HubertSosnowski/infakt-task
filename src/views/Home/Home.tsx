import { Link } from "react-router-dom";
import { Button } from "../../UI/Button";

const Home = () => {
  return (
    <div>
      <Link to="/ksiegowi"><Button text="Księgowi" /></Link>
    </div>
  )
}

export default Home
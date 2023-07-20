
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <h1> Page <span style={{ color: "firebrick" }} >{location.pathname}</span> not found </h1>
      <Link to="/" style={{ color: "firebrick", fontWeight: "bold" }}>
        Home Page &rarr;
      </Link>
    </>
  );
}

export default NotFound;
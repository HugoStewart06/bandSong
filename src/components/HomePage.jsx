import { Link } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container-homepage">
      <header className="app-header">
          <h2 className="text-homepage">Relax. Chill. Discover gooooood music.</h2>
            <h3 className="intro-homepage">
              Welcome to Bandgangs, an innovative way to listen to music, discover artists, only providing you
              with the cream of the crop. Let yourself drop in this thrilling and sensory experience.
            </h3>
        <Link to='/home'>
          <div className="arrow">
            <a href="#section-home"></a>
          </div>
        </Link>
      </header>
    </div>
  );
};
export default HomePage;

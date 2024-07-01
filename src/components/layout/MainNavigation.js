import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Some Link</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

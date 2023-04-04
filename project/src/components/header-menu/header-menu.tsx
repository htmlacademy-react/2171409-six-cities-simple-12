import { Link } from 'react-router-dom';

type HeaderMenuProps = {
  isActive: boolean;
  city: string;
  changeCurrentLocation: (e: React.MouseEvent<HTMLAnchorElement>, city: string) => void;
}

function HeaderMenu(props: HeaderMenuProps): JSX.Element {
  const { city, changeCurrentLocation, isActive } = props;
  const setActive = isActive ? 'tabs__item--active' : '';



  return (
    <li className='locations__item'>
      <Link className={`locations__item-link tabs__item ${setActive}`} to={'/'} onClick={(e) => changeCurrentLocation(e, city)}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export { HeaderMenu };

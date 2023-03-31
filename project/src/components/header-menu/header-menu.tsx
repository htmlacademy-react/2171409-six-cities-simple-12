import { NavLink } from 'react-router-dom';

type setActiveProp = {
  isActive: boolean;
}

const setActive = ({ isActive }: setActiveProp) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';

function HeaderMenu(): JSX.Element {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          <li className='locations__item'>
            <NavLink className={setActive} to='/'>
              <span>Paris</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={setActive} to='/cologne'>
              <span>Cologne</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={setActive} to='/brussels'>
              <span>Brussels</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={setActive} to='/amsterdam' >
              <span>Amsterdam</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={setActive} to='/hamburg'>
              <span>Hamburg</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={setActive} to='/dusseldorf'>
              <span>Dusseldorf</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}

export { HeaderMenu };

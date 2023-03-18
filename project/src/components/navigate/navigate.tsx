import { NavLink } from 'react-router-dom';

type setActiveProp = {
  isActive: boolean;
}

const setActive = ({ isActive }: setActiveProp) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';

function Navigate(): JSX.Element {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          <li className='locations__item'>
            <NavLink className={setActive} to='/1'>
              <span>Paris</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={setActive} to='/2'>
              <span>Cologne</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={setActive} to='/3'>
              <span>Brussels</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink to='/' className={setActive} >
              <span>Amsterdam</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={setActive} to='/4'>
              <span>Hamburg</span>
            </NavLink>
          </li>
          <li className='locations__item'>
            <NavLink className={'locations__item-link tabs__item'} to='/5'>
              <span>Dusseldorf</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}

export { Navigate };

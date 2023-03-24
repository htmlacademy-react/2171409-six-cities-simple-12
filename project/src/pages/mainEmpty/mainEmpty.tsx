import { HeaderMenu } from '../../components/header-menu/headerMenu';
import { Header } from '../../components/header/header';

function MainScreenEmpty(): JSX.Element {
  return (
    <>
      <Header />
      <main className='page__main page__main--index page__main--index-empty'>
        <h1 className='visually-hidden'>Cities</h1>
        <HeaderMenu />
        <div className='cities'>
          <div className='cities__places-container cities__places-container--empty container'>
            <section className='cities__no-places'>
              <div className='cities__status-wrapper tabs__content'>
                <b className='cities__status'>No places to stay available</b>
                <p className='cities__status-description'>We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className='cities__right-section' />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreenEmpty;
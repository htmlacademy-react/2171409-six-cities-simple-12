import MainScreen from '../../pages/main/main';


type AppProps = {
  placesAmount: number;
}

function App({placesAmount}: AppProps ): JSX.Element {
  return (
    <MainScreen placesAmount={placesAmount}/>
  );
}

export default App;

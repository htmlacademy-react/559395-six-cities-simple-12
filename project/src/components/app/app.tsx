import Main from '../../pages/main/main';

type Props = {
  placesCount: { placesCount: number };
};

function App({ placesCount }: Props): JSX.Element {
  return <Main placesCount={placesCount.placesCount} />;
}

export default App;

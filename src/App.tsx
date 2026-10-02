import './App.css';
import ResortListingContainer from "./components/ResortListingContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <header className='top-header'>
        <h1>Resorts Lite</h1>
      </header>
      <ResortListingContainer data = {data}/>
    </>
  );
}

export default App;
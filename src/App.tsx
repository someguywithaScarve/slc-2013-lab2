import './App.css';
import ResortListingContainer from "./components/ResortListingContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <header className='top-header'>
        <h1>Resort Lite</h1>
      </header>
      <ResortListingContainer data = {data}/>
    </>
  );
}

export default App;
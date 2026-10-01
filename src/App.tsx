import './App.css';
import ResortListingContainer from "./components/ResortListingContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <h1>Resort Lite</h1>
      <ResortListingContainer data = {data}/>
    </>
  );
}

export default App;

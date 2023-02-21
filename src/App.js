import './App.css';
import ColorCard from './Components/ColorCard';

function App() {
  return (
    <div className="App">

      <ColorCard colorcode="#FF6663" name="Pink" />
      <ColorCard colorcode="#333333" name="Gray" />
      <ColorCard colorcode="#000000" name="Black" />
      <ColorCard colorcode="#38BB14" name="Green" />
      <ColorCard colorcode="#C90B0B" name="Red" />
      <ColorCard colorcode="#FF8000" name="Orange" />
      <ColorCard colorcode="#FFF500" name="Yellow" />
      <ColorCard colorcode="#CCCCCC" name="Light-Gray" />
      <ColorCard colorcode="#7E41A2" name="Purple" />
      <ColorCard colorcode="#C14911" name="Brown" />
    </div>
  );
}

export default App;


import './App.css';
import Login from './component/login';
import SelectCountryAndCity from './component/selectCountryAndCity';
import DetailsView from './component/detailsView';

function App() {

  return (
    <div className="App">
      <Login></Login>
      <SelectCountryAndCity></SelectCountryAndCity>
      <DetailsView></DetailsView>
    </div>
  );
}

export default App;
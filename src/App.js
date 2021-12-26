import Home from './pages/Home';
import HeaderNavBar from './components/HeaderNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
      <header>
        <HeaderNavBar/>
      </header>

     <Home/>

    </div>
  );
}

export default App;

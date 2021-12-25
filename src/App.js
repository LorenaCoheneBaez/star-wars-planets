import CardPlanet from './components/CardPlanet';
import HeaderNavBar from './components/HeaderNavBar';

function App() {
  return (
    <div>
      <header>
        <HeaderNavBar/>
      </header>

     <main >
        <h1 className="mb-3 mt-4">Planetas de Star Wars</h1>
       <CardPlanet/>
     </main>

    </div>
  );
}

export default App;

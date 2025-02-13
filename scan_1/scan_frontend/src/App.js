import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
 <>
    <div className="App">

        <div>
            <Header />
        </div>

         <div>
            <Main />
        </div>

        <div>
            <Footer />
        </div>

    </div>
 </>
  );
}

export default App;

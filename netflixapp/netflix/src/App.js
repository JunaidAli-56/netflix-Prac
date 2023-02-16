import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './pages/Home';
import About from './pages/About';
import SlotGame from './pages/SlotGame/SlotGame';
import UseState from './pages/Hooks/UseState';
import Form from './pages/Form/Form';

function App() {
  return (
    <>
      <Header />
      <main>

        <Home />
        {/* <About /> */}
        {/* <SlotGame /> */}
        {/* <UseState /> */}
        {/* <Form /> */}

      </main>
      <Footer />
    </>
  );
}

export default App;
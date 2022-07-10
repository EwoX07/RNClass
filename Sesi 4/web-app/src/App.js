import Navbar from './components/Navbar/Navbar';
import Invitation from './components/Invitation/Invitation';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Members from './components/Members/Members';
import Past from './components/Past/Past';
import Line from './components/Line/Line';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Invitation />
      <Detail />
      <About />
      <Members />
      <Past />
      <Line />
      <Footer />
    </>
  );
};

export default App;

import { Container } from 'reactstrap'        //Reactstrap library makes it much easier to handle frontend
import RoutesFunc from './routes';
import './App.css';

function App() {
  return (
    <Container>
      <h1>Sport's App</h1>
      <RoutesFunc/>
    </Container>
  );
}

export default App;

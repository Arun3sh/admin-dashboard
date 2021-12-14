import './App.css';
import { SidemenuBar } from './components/SidemenuBar';
import { Contentwrapper } from './components/Contentwrapper';

function App() {
	return (
		<div className="App">
			<div className="Wrapper">
				<SidemenuBar />
				<Contentwrapper />
			</div>
		</div>
	);
}

export default App;

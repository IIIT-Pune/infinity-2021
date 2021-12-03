
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Team from "./components/Team";
import "./App.css";

import "./styles/tailwind.css";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-black min-h-screen h-full">
			<NavBar />
			<Home/>
			<Team />
			<Footer/>
		</div>
	);
}

export default App;

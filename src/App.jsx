
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Team from "./Team";
import AboutUs from "./components/AboutUs";
import "./App.css";

import "./styles/tailwind.css";

function App() {
	return (
		<div className="bg-black min-h-screen h-full">
			<NavBar />
			<Home/>
			<AboutUs/>
			<Team />

		</div>
	);
}

export default App;

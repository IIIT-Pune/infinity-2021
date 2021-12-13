import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Archive from "./components/Archive";
import Team from "./components/Team";
import "./App.css";

import "./styles/tailwind.css";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-black min-h-screen h-full">
			<NavBar />
			{/* <Home/>
			<AboutUs/>
			<Team /> */}
			<Archive />
			<Footer />
		</div>
	);
}

export default App;

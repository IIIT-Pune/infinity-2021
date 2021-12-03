import { Fragment } from "react/cjs/react.production.min";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import "./styles/tailwind.css";

function App() {
	return (
		<div className="bg-black min-h-screen h-full">
			<NavBar />
			<Home/>
		</div>
	);
}

export default App;

import { useState } from "react";
import Team from "./Team";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
				<Team />
		</div>
	);
}

export default App;

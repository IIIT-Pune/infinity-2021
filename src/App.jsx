
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import "./App.css";

import "./styles/tailwind.css";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Successfull from "./components/Successfull";
import { useEffect, useState } from "react";
import Alert from "./components/Alert";

function App() {
	const [showAlert,SetshowAlert]=useState(false)
	const [isSuccessfull, SetisSuccessfull] = useState(false);
	useEffect(() => {
		let timer;
		if(showAlert){
			 timer=setInterval(()=>{
				SetshowAlert(false)
			},3000);
		}
		return () => {
			clearInterval(timer)
		}
	}, [showAlert])
	return (
		<div className="bg-black min-h-screen h-full relative">
			<NavBar />
			<Home />
			{isSuccessfull ? (
				<Successfull
					SetshowAlert={SetshowAlert}
					SetisSuccessfull={SetisSuccessfull}
				/>
			) : (
				<Registration SetisSuccessfull={SetisSuccessfull} />
			)}
			<AboutUs />
			<Team />
			<Footer />
			{showAlert && <Alert />}
		</div>
	);
}

export default App;

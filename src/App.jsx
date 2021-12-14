import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Archive from "./components/Archive";
import Team from "./components/Team";
import "./App.css";

import "./styles/tailwind.css";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Successfull from "./components/Successfull";
import Fame from "./components/Fame";
import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import { Route, Routes, useLocation } from "react-router-dom";

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
	}, [showAlert]);
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	const MainComponent = () => (
		<div className="mt-16 scroll-smooth">
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
		</div>
	);
	return (
		<div className="bg-black min-h-screen h-full relative scroll-smooth ">
			<NavBar />
			<Routes>
				<Route path="/archives" element={<Archive />} />
				<Route path="/halloffame" element={<Fame />} />
				<Route path="*" element={<MainComponent />} />
			</Routes>
			<Footer />
			{showAlert && <Alert />}
		</div>
	);
}

export default App;

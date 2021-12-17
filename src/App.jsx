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
import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Feedback from "./components/Feedback";

function App() {
	const [showAlert, SetshowAlert] = useState(false);
	const [isSuccessfull, SetisSuccessfull] = useState(false);
	const [ispageloading, Setispageloading] = useState(true);
	const referalId = useRef(null);
	const query = new URLSearchParams(useLocation().search);
	useEffect(() => {
		let timer;
		if (showAlert) {
			timer = setInterval(() => {
				SetshowAlert(false);
			}, 3000);
		}
		return () => {
			clearInterval(timer);
		};
	}, [showAlert]);
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	useEffect(() => {
		if (query.get("ref")) referalId.current = query.get("ref");
		const timer = setInterval(() => {
			Setispageloading(false);
		}, 5000);
		() => {
			clearInterval(timer);
		};
	}, []);
	const MainComponent = () => (
		<div className="mt-16 scroll-smooth">
			<Home />
			{isSuccessfull ? (
				referalId.current != null && (
					<Successfull
						SetshowAlert={SetshowAlert}
						SetisSuccessfull={SetisSuccessfull}
						referalId={referalId}
					/>
				)
			) : (
				<Registration
					SetisSuccessfull={SetisSuccessfull}
					referalId={referalId}
				/>
			)}
			<AboutUs />
		</div>
	);
	const PageLoader = () => (
		<div className="fixed inset-0 z-[99999] w-[100%] h-[100vh] bg-[#020A0F] py-36 md:py-0 md:px-20 scroll-">
			<video
				src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/ezgif.com-gif-maker.webm?alt=media&token=fae5e3c2-4521-4547-b242-d82dbd068020"
				className="h-full w-full object-fill"
				autoPlay
				muted
			/>
		</div>
	);
	return (
		<div className="w-full h-full ">
			{ispageloading &&
				<PageLoader />}
				<div className={`bg-black min-h-screen h-full relative scroll-smooth ${ispageloading && "hidden"} `}>
					<NavBar />
					<Routes>
						<Route path="/archives" element={<Archive />} />
						<Route path="/halloffame" element={<Fame />} />
						<Route path="/ourteam" element={<Team />} />
						<Route path="*" element={<MainComponent />} />
					</Routes>
					<Footer />
					
				</div>
			
		</div>
	);
}

export default App;

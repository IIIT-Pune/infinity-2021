import { Link } from "react-router-dom";
import CodechefLogo from "../assets/codechef-logo.svg";
import Feedback from "./Feedback";
import "./footer.css";
function Footer() {
	return (
		<div className="h-full">
			<div className="bg-pink-squid p-5 flex flex-col md:flex-row h-full">
				<div className="md:w-1/3 h-full flex flex-col items-center p-10 md:p-24">
					<div>
						<a
							href="mailto:infinity@iiitp.ac.in"
							className="font-bold text-2xl font-montserrat text-white hover:text-white"
						>
							infinity@iiitp.ac.in
						</a>
					</div>
					<div className="bg-[#ffe8e7] rounded-full mt-10 ">
						<img src={CodechefLogo} className=" " alt="codechef-logo" />
					</div>
				</div>
				<div className="md:w-1/3  ">
					<div className="bg-[#ffe8e7] p-5 rounded-lg">
						<div className="font-squidgame font-bold text-xl text-center">
							InFiniTy 2k21
						</div>
						<div>
							<Feedback />
						</div>
					</div>
				</div>

				<div className="md:w-1/3 h-full flex flex-col items-center justify-center font-bold text-xl gap-y-4 p-10 md:p-20">
					<Link
						to="/"
						className="text-white hover:scale-125 hover:text-white transform duration-200 ease-linear"
					>
						HOME
					</Link>
					<Link
						to="/archives"
						className="text-white hover:scale-125 hover:text-white transform duration-200 ease-linear"
					>
						ARCHIVES
					</Link>
					<Link
						to="/halloffame"
						className="text-white hover:scale-125 hover:text-white transform duration-200 ease-linear"
					>
						HALL OF FAME
					</Link>
					<Link
						to="/ourteam"
						className="text-white hover:scale-125 hover:text-white transform duration-200 ease-linear"
					>
						OUR TEAM
					</Link>
				</div>
			</div>
			<div className="bg-pink-squid text-center text-white font-bold text-sm pb-1">© Copyright {new Date().getFullYear()} | Infinity, IIIT Pune</div>
			{/* <div id="footer-contact" className="footer-distributed bg-pink-squid p-5">
				<div className="footer-left">
					<div className="footer-company-about flex flex-col items-center w-full">
						<h4>InfInIty 2k21!</h4>
						<Feedback />
						<h5>Email: infinity@iiitp.ac.in</h5>
						<img
							src={CodechefLogo}
							className="codechef-logo "
							alt="codechef-logo"
						/>
					</div>
				</div>
				<div className="footer-right bg-red-100 h-full">
					<p className="footer-links text-white">
						<Link to="/" className="text-white hover:text-white">
							HOME
						</Link>
						<Link to="/archives" className="text-white hover:text-white">
							ARCHIVES
						</Link>
						<Link to="/halloffame" className="text-white hover:text-white">
							HALL OF FAME
						</Link>
						<Link to="/ourteam" className="text-white hover:text-white">
							OUR TEAM
						</Link>
					</p>
				</div>
				<div style={{ color: "white", marginTop: "10px", marginLeft: "10px" }}>
					© Copyright {new Date().getFullYear()} | Infinity, IIIT Pune
				</div>
			</div> */}
		</div>
	);
}

export default Footer;

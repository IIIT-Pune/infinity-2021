import CodechefLogo from "../assets/codechef-logo.svg";
import Feedback from "./Feedback";
import "./footer.css";
function Footer() {
	return (
		<div>
			<div id="footer-contact" className="footer-distributed bg-pink-squid">
				<div className="footer-left">
					<div className="footer-company-about flex flex-col items-center w-full">
						<h4>InfInIty 2k21!</h4>
						<Feedback/>
						<h5>Email: infinity@iiitp.ac.in</h5>
						<img
							src={CodechefLogo}
							className="codechef-logo "
							alt="codechef-logo"
						/>
					</div>
				</div>
				<div className="footer-right">
					<p className="footer-links text-white">
						<a href="#">HOME</a>
						<a href="#">REGISTRATION</a>
						<a href="#">LEADERBOARD</a>
						<a href="#">ARCHIVES</a>
						<a href="#">HALL OF FAME</a>
					</p>
				</div>
				<div style = {{color: "white", marginTop: "10px", marginLeft: "10px"}}>
					© Copyright {new Date().getFullYear()} | Infinity, IIIT Pune
				</div>
			</div>
		</div>
	);
}

export default Footer;

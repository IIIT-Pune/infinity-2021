import CodechefLogo from "../assets/codechef-logo.svg";
import "./footer.css";
function Footer() {
	return (
		<div>
			<div id="footer-contact" class="footer-distributed bg-pink">
				<div class="footer-left">
					<div class="footer-company-about flex flex-col items-center">
						<h4>InfInIty 2k21!</h4>
						<p>
							InfInIty is IIIT Pune's annual flagship coding contest hosted
							every year on CodeChef. A 3 hour coding contest that's guaranteed
							to get your head itching and your heart wanting more. InfInIty
							started in 2017 and was limited to only IIIT Pune students.
						</p>
						<h5>Email: infinity@iiitp.ac.in</h5>
						<img
							src={CodechefLogo}
							class="codechef-logo "
							alt="codechef-logo"
						/>
					</div>
				</div>
				<div class="footer-right">
					<p class="footer-links text-white">
						<a href="#">HOME</a>
						<a href="#">REGISTRATION</a>
						<a href="#">LEADERBOARD</a>
						<a href="#">ARCHIVES</a>
						<a href="#">HALL OF FAME</a>
					</p>
				</div>
				
			</div>
            
		</div>
	);
}

export default Footer;

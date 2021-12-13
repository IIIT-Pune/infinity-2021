import mask from '../assets/front man mask tp 1.png'
function AboutUs() {
  return (
		<div className="p-16">
			<div className="grid lg:grid-cols-2">
				<div className="flex-col space-y-8">
					<div className="uppercase text-5xl font-black text-center md:text-left">
						<span className="text-white">About</span>{" "}
						<span className="text-pink-squid">Us</span>
					</div>
					<div className="font-montserrat font-normal text-xl text-center md:text-left lg:text-3xl ">
						<span className="text-white">
							Infinity is IIIT Pune's annual flagship coding contest hosted
							every year on Codechef. A 3 hour coding contest that's guaranteed
							to get your head itching and your heart wanting more. Infinity
							started in 2017 and was limited only to IIIT Pune.
						</span>
						<br />
						<br />
						<span className="text-white">
							The contest follows ACM style scoring and consists of problems
							designed for participants ranging from beginners to experts.
							Anyone having a knack for coding is encouraged to participate.
						</span>
					</div>
				</div>
				<div>
					<img src={mask} alt="..."></img>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;

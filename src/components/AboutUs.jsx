const mask = "https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/front%20man%20mask%20tp%201.png?alt=media&token=ca48f8fc-1bd7-4930-bd30-e4c4fd9c7d8f";
function AboutUs() {
	return (
		<div className="p-16">
			<div className="flex flex-col md:flex-row">
				<div className="flex-col space-y-8 md:w-1/2">
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
				<div className="md:w-1/2 ">
					<img src={mask} alt="..."></img>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;

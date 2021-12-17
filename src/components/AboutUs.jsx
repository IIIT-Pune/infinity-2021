import { motion } from "framer-motion";

const mask =
	"https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/front%20man%20mask%20tp%201.webp?alt=media&token=46e1a373-7dc6-4e28-b96c-d8466e90d742";
function AboutUs() {

	return (
		<div className="p-16 overflow-x-hidden">
			<div className="flex flex-col md:flex-row">
				<div className="flex-col space-y-8 md:w-1/2">
					<div className="uppercase text-5xl font-black text-center md:text-left">
						<span className="text-white">About</span>{" "}
						<span className="text-pink-squid">Us</span>
					</div>
					<div className="font-montserrat font-normal text-xl text-center md:text-left lg:text-2xl ">
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
				<motion.div className="md:w-1/2 max-h-[28rem] ">
					<div className="text-gray-500 w-full text-center font-squidgame text-xs">TRY ME! FRONT MAN HERE</div>
					<motion.img
						src={mask}
						alt="..."
						drag
						dragConstraints={{ left: 50, right: 50, top: 50, bottom: 50 }}
						dragSnapToOrigin={true}
						className="h-full w-full cursor-pointer object-contain "
					></motion.img>
				</motion.div>
			</div>
		</div>
	);
}

export default AboutUs;

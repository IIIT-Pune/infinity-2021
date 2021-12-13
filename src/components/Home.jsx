import HomeLogo from "../assets/homelogo.png";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "react-countdown";
function Home() {
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		
		if (completed) {
			// Render a completed state
			return null;
		} else {
			// Render a countdown
			return (
				<AnimatePresence>
					<div className="bg-pink-squid px-5 py-1 rounded-lg font-bold flex flex-row">
						<div className="flex flex-col items-center">
							<motion.div
								key={days}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: "easeOut",
									duration: 1,
								}}
							>
								{days}
							</motion.div>
							<div className="text-black text-xs font-mono tracking-tighter uppercase">
								DayS
							</div>
						</div>
						:
						<div className="flex flex-col items-center">
							<motion.div
								key={hours}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: "easeOut",
									duration: 1,
								}}
							>
								{hours}
							</motion.div>
							<div className="text-black text-xs font-mono tracking-tighter uppercase">
								HOURS
							</div>
						</div>{" "}
						:
						<div className="flex flex-col items-center">
							<motion.div
								key={minutes}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: "easeOut",
									duration: 1,
								}}
							>
								{minutes}
							</motion.div>{" "}
							<div className="text-black text-xs font-mono tracking-tighter uppercase">
								MINS
							</div>
						</div>
						:
						<div className="flex flex-col items-center">
							<motion.div
								key={seconds}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: "easeOut",
									duration: 1,
								}}
							>
								{seconds}
							</motion.div>{" "}
							<div className="text-black text-xs font-mono tracking-tighter uppercase">
								SECS
							</div>
						</div>
					</div>
				</AnimatePresence>
			);
		}
	};
	return (
		<div className="text-white w-full  ">
			<div className="flex items-center justify-center w-full">
				<img
					src={HomeLogo}
					alt="..."
					className="max-w-sm md:max-w-2xl md:max-h-96"
				/>
			</div>
			<div className="font-montserrat font-bold tracking-widest antialiased w-full text-center text-xl mt-4">
				HOSTED ON{" "}
				<span className="text-pink-squid font-extrabold">CODECHEF</span>
			</div>
			<div className="font-montserrat font-medium tracking-wide antialiased w-full text-xl mt-2 flex flex-row  items-center justify-center">
				<CalendarIcon className="text-pink-squid h-6 w-6 mr-1" />
				DEC 15' 2021 <ClockIcon className="text-pink-squid h-6 w-6 ml-1 mr-1" />
				21:00 -23:00
			</div>
			<div className="font-montserrat  tracking-wide antialiased w-full text-xl mt-3 flex flex-row  items-center justify-center ">
				<Countdown date={Date.now() + 100000} renderer={renderer} />
			</div>
		</div>
	);
}

export default Home;

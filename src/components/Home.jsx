import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
function Home() {
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return (
				<div className="bg-pink-squid px-5 py-1 rounded-lg font-bold text-center">
					LIVE NOW
				</div>
			);
		} else {
			// Render a countdown
			return (
				
					<div className="bg-pink-squid px-5 py-1 rounded-lg font-bold flex flex-row">
						<div className="flex flex-col items-center">
							<div
								key={days}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: "easeOut",
									duration: 1,
								}}
							>
								{days}
							</div>
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
			);
		}
	};
	return (
		<div className="text-white w-full  min-h-[90vh]  flex flex-col p-5">
			<div className="flex items-center justify-center w-full mt-16 md:mt-0">
				<img
					src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/homelogo.webp?alt=media&token=cfba3b3a-2a98-4345-bb3d-b2faf1a02687"
					alt="..."
					className="max-w-xs md:max-w-2xl min-h-[20rem] md:max-h-96"
				/>
			</div>
			<div className="font-montserrat font-bold tracking-widest antialiased w-full text-center text-xl mt-20 md:mt-4">
				HOSTED ON{" "}
				<span className="text-pink-squid font-extrabold">CODECHEF</span>
			</div>
			<div className="font-montserrat font-medium tracking-wide antialiased w-full text-xl mt-5 md:mt-2 flex flex-row  items-center justify-center">
				<CalendarIcon className="text-pink-squid h-6 w-6 mr-1" />
				DEC 15' 2021 <ClockIcon className="text-pink-squid h-6 w-6 ml-1 mr-1" />
				21:00 -23:00
			</div>
			<div className="font-montserrat  tracking-wide antialiased w-full text-xl mt-10 md:mt-3 flex flex-row  items-center justify-center ">
				<Countdown date={Date.now() + 100000} renderer={renderer} />
			</div>
		</div>
	);
}

export default Home;

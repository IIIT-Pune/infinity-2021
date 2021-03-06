import React, {  useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsSquare, BsTriangle, BsCircle } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";
import "../styles/tailwind.css";
import problemSet from "../data/ProblemSet";
import { AnimatePresence, motion } from "framer-motion";
const CodeChefLogo =
	"https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef.webp?alt=media&token=e67bef8e-ef2d-467c-92ba-3526fba88e86";

function ProblemCard(props) {
	const [isHidden, setIsHidden] = useState(true);
	let problemCode = props.problem.code,
		problemName = props.problem.name,
		problemLink = props.problem.link,
		successfulSubmissions = props.problem.successfulSubmissions,
		accuracy = props.problem.accuracy;

	return (
		<>
			{isHidden ? (
				<motion.div
					key={props.id}
					className="max-w-sm rounded bg-gradient-to-b from-archiveLight to-archiveDark h-80 w-52 "
				>
					<div
						className="flex flex-col cursor-pointer rounded gap-4 justify-center items-center m-1 bg-archiveSecondary min-w-max h-78"
						onClick={() => {
							setIsHidden(false);
						}}
					>
						<BsSquare className="text-6xl bg-none text-white" />
						<BsTriangle className="text-6xl bg-none text-white" />
						<BsCircle className="text-6xl bg-none text-white" />
					</div>
				</motion.div>
			) : (
				<motion.div
					key={props.id}
				
					animate={{
						rotateY: 180,
						transition: { duration: 0.5},
						zIndex: 10,
					}}
					className="max-w-sm rounded bg-gradient-to-b from-archiveLight to-archiveDark h-80 w-52 "
				>
					<div
						style={{ transform: "rotateY(180deg)" }}
						className="flex flex-col rounded gap-2 justify-center items-center m-1 bg-archivePrimary min-w-max h-78 "
					>
						<a
							href={problemLink}
							target="_blank"
							className="flex flex-col justify-center items-center text-black hover:text-white/60 transition duration-150"
						>
							<div className=" font-extrabold text-3xl ">{problemCode}</div>
							<div className="font-bold">{problemName}</div>
						</a>
						<div className="text-white font-extrabold text-3xl">
							{successfulSubmissions}
						</div>
						<div className="text-white font-bold">Successful Submissions</div>
						<div style={{ width: 120, height: 120, fontWeight: "bolder" }}>
							<CircularProgressbar
								value={accuracy}
								text={`${accuracy}`}
								background
								backgroundPadding={6}
								styles={buildStyles({
									backgroundColor: "#F9E7E8",
									textColor: "#BF4A70",
									pathColor: "#BF4A70",
									trailColor: "transparent",
								})}
							/>
						</div>
						<div className="text-white font-bold">Accuracy</div>
					</div>
				</motion.div>
			)}
		</>
	);
}

function ProblemSet(props) {
	return (
		<a href={props.link} target="_blank">
			<div className="w-72 md:w-96 h-60 bg-archivePrimary text-white flex flex-col rounded gap-4 justify-center items-center">
				<img src={CodeChefLogo} className="w-40 h-40 bg-transparent" />
				<div className=" text-4xl font-extrabold text-center">
					{props.year} Infinity
				</div>
			</div>
		</a>
	);
}

function Archive() {
	return (
		<div className="bg-black mt-16">
			<div className="flex justify-center items-center text-white text-6xl font-extrabold mt-10 mb-10">
				2<div className="text-archivePrimary">K</div>20
			</div>
			<div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
				<AnimatePresence>
					{problemSet.map((problem,i) => {
						return <ProblemCard problem={problem} key={problem.code} id={i}/>;
					})}
				</AnimatePresence>
			</div>
			<div className="flex justify-center items-center flex-wrap text-white text-6xl font-extrabold mt-10">
				2<div className="text-archivePrimary">K</div>19 AND 2
				<div className="text-archivePrimary">K</div>18
			</div>
			<div className="flex justify-center items-center flex-wrap gap-4 text-white text-6xl font-extrabold mb-10">
				QUESTION<div className="text-archivePrimary">SET</div>
			</div>
			<div className="max-w-6xl ml-auto mr-auto flex flex-col md:flex-row items-center gap-y-8  md:justify-around mb-5">
				<ProblemSet year="2K19" link="https://www.codechef.com/INFY2019/" />
				<ProblemSet year="2K18" link="https://www.codechef.com/INTY2018" />
			</div>
		</div>
	);
}

export default Archive;

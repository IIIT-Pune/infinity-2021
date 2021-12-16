import { Link } from "react-router-dom";

function Successfull({ SetshowAlert, SetisSuccessfull, referalId }) {
	const refUrl = "http://localhost:5000?ref=" + referalId.current;
	const handleCopy = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(refUrl).then(
				function () {
					SetshowAlert(true);
				},
				function (err) {
					console.error("Async: Could not copy text: ", err);
				}
			);
		} else {
			const elem = document.createElement("textarea");
			elem.value = refUrl;
			document.body.appendChild(elem);
			elem.select();
			document.execCommand("copy");
			document.body.removeChild(elem);
			SetshowAlert(true);
		}
	};
	return (
		<div className="md:h-screen p-10 md:px-16 md:py-16 flex justify-center ">
			<div className=" h-full max-w-4xl flex flex-col md:flex-row rounded-lg overflow-hidden">
				<div className="w-full md:w-1/3 h-full bg-[#DDE0DC]  py-16 md:py-10 px-2 md:px-2 items-center  flex flex-col ">
					<div className="text-black font-squidgame text-4xl">ThAnK YoU !!</div>
					<div className="text-xs font-montserrat text-center font-bold text-gray-500 mt-2">
						“We’ve Already Come Too Far To End This Now.” – Sang-Woo
					</div>
					<div className="text-black font-montserrat text-xl font-extrabold  text-center mt-16">
						Refer a friend, get rewards
					</div>
					<div className="flex rounded-lg overflow-hidden justify-center mt-2">
						<input
							className="bg-[#7C8975]  py-2 px-2 font-semibold cursor-text"
							value={refUrl}
							disabled={true}
						></input>
						<div
							className="bg-[#BC954E] p-2 font-semibold cursor-pointer"
							onClick={handleCopy}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
								/>
							</svg>
						</div>
					</div>
					<Link to="/archives">
						<div className="border-2 border-black w-64 cursor-pointer mt-16 rounded-full py-1 text-center font-montserrat text-sm font-extrabold">
							Practice
						</div>
					</Link>
					<div
						className="border-2 border-black w-64 cursor-pointer mt-2 rounded-full py-1 text-center font-montserrat text-sm font-extrabold"
						onClick={() => SetisSuccessfull(false)}
					>
						Register Again
					</div>
				</div>
				<div className="w-2/3 h-full hidden md:inline-block">
					<img
						src="https://cdn.dribbble.com/users/1732596/screenshots/16680448/media/df9cfc5ffa92df985054270f81e53f08.gif"
						alt="thanks"
						className="w-full h-full object-fill "
					/>
				</div>
			</div>
		</div>
	);
}

export default Successfull;

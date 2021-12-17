import React, { useState } from "react";
import "../styles/tailwind.css";

export default function Feedback() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = () => {
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(email)) {
			setIsEmailValid(false);
			return;
		}
		setIsEmailValid(true);

		// store response

		setEmail("");
		setMessage("");
		setIsSubmitted(true);
		setTimeout(() => setIsSubmitted(false), 5000);
	};

	return (
		<div className="flex justify-center">
			<div className="md:w-96 h-full w-full flex flex-col items-center">
				<div className="flex justify-start justify-items-start mt-4 font-semibold text-gray-600">
					Email
				</div>
				<input
					type="text"
					spellCheck="false"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="text-sm font-semibold  text-gray-600 w-full appearance-none rounded focus:bg-white focus:outline-none transition ease-in-out focus:border-pink-squid border py-1 px-2 leading-tight"
				></input>
				{!isEmailValid && (
					<div className="flex justify-start justify-items-start text-sm text-red-500">
						Please enter a valid email.
					</div>
				)}
				<div className="flex justify-start justify-items-start mt-4 font-semibold text-gray-600">
					Message
				</div>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="text-sm font-semibold  text-gray-600 w-full h-24 appearance-none rounded focus:bg-white focus:outline-none transition ease-in-out focus:border-pink-squid border py-1 px-2 leading-tight"
				></textarea>
				<button
					onClick={handleSubmit}
					className="mt-3 px-2 py-1 text-base font-semibold text-white rounded bg-pink-squid hover:bg-pink-600 "
				>
					Submit Feedback
				</button>
				{isSubmitted && (
					<div className="text-sm font-semibold text-green-500 mt-3 shadow-md">
						Thank you for your feedback!
					</div>
				)}
			</div>
		</div>
	);
}

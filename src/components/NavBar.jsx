import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import LogoNav from "../assets/logo.png";
const navigation = [
	{ name: "HOME", href: "#", current: true },
	{ name: "ARCHIVE", href: "#", current: false },
	{ name: "HALL OF FAME", href: "#", current: false },
	{ name: "LEADERBOARD", href: "#", current: false },
	{ name: "BROCHURE", href: "#", current: false },
];
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
function NavBar() {
	return (
		<Disclosure as="nav">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 ">
						<div className="relative flex items-center justify-start sm:justify-around h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className=" flex items-center justify-center sm:items-stretch sm:justify-start ml-16 sm:ml-0">
								<div className="flex-shrink-0 flex items-center">
									<img className=" h-6 w-auto" src={LogoNav} alt="Infinity" />
								</div>
							</div>

							<div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													" text-gray-200 text-xs md:px-3 py-2 border-transparent md:text-sm font-bold font-montserrat tracking-wide transition duration-300 ease-in-out hover:text-pink-squid border-b hover:border-pink-squid"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<div className="bg-pink-squid px-2 py-1 text-white font-montserrat font-semibold rounded-lg cursor-pointer">
									REGISTER NOW
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

export default NavBar;

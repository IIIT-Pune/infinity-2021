import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import LogoNav from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
const navigation = [
	{ name: "HOME", href: "/", current: false },
	{ name: "ARCHIVE", href: "/archives", current: false },
	{ name: "HALL OF FAME", href: "/halloffame", current: false },
	{ name: "OUR TEAM", href: "/ourteam", current: false },
];
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
function NavBar() {
	const { pathname } = useLocation();
	let navigate = useNavigate();
	const onRegisterNow = () => {
		if (pathname !== "/"){
				navigate("/#registration");
		}else{
			scroller.scrollTo("registration", {
				duration: 1000,
				smooth: true,
				offset: -20,
			});
		}
	};
	return (
		<Disclosure as="nav" className="">
			{({ open }) => (
				<div className="bg-black fixed w-full z-50 top-0 ">
					<div className=" mx-auto px-2   ">
						<div className="relative flex items-center justify-start sm:justify-around h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none ">
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
									<Link to="/">
										<img className=" h-6 w-auto" src={LogoNav} alt="Infinity" />
									</Link>
								</div>
							</div>

							<div>
								<div className="hidden sm:block sm:ml-20">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className={classNames(
													" text-gray-200 text-xs md:px-3 py-2 border-transparent md:text-sm font-bold font-montserrat tracking-wide transition duration-300 ease-in-out hover:text-pink-squid border-b hover:border-pink-squid"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<div
									onClick={onRegisterNow}
									className="bg-pink-squid select-none px-2 py-1 text-white font-montserrat font-semibold rounded-lg cursor-pointer focus:outline-none"
								>
									REGISTER NOW
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link to={item.href} key={item.name}>
									<Disclosure.Button
										key={item.name}
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
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
}

export default NavBar;

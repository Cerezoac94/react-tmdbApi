import React, { useState } from "react";
import Button from "../elements/Button";

const Nav = () => {
	let Links = [
		{ name: "Home", link: "/" },
		{ name: "Movies", link: "/" },
		{ name: "Genre", link: "/" },
		{ name: "Favorites", link: "/" },
		{ name: "Contact us", link: "/" },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-full  top-0 left-0">
			<div className=" md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
				<div
					className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 md:ml-0 ml-12"
				>
					<span className="text-3xl text-red-600 mr-1 pt-2">
						<ion-icon name="videocam-outline"></ion-icon>
					</span>
					ACDMDb
				</div>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute left-8 top-6 cursor-pointer md:hidden"
				>
					<ion-icon name={open ? "close" : "menu"}></ion-icon>
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 " : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.name} className="md:ml-3 lg:ml-6 text-lg md:my-0 my-7">
							<a
								href={link.link}
								className="text-gray-800 hover:text-gray-400 duration-300"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
        <div className=" space-x-2 md:inline-block">
					<div class="hidden relative md:inline-block w-44">
						<input
							type="search"
							name="serch"
							placeholder="Search"
							class="inline-block w-full px-4 py-2 text-left text-white bg-gray-600 rounded-full shadow hover:bg-gray-800 relativeh-10px-5 pr-10 text-sm focus:outline-none"
						/>
						<button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
							<svg aria-hidden="true"
								class="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</button>
				  </div>
          </div>

        <div className=" md:static md:w-40 bg-slate-500 absolute right-8 top-6">
          <Button>Log In</Button>
        <Button>Sign Up</Button>
        </div>
				
			</div>
		</div>
	);
};

export default Nav;

import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import {
	Twitter,
	Instagram,
	Facebook,
	UserRound,
	AlignJustify,
	Search,
} from "lucide-react";
import CartIcon from "./CartIcon";

function NavBar() {
	return (
		<nav className="flex justify-between p-2 secondary-color text-white h-16 md:h-[88px]">
			<div className="md:hidden flex items-center">
				<AlignJustify />
			</div>
			<div className="hidden md:flex space-x-7 items-center pl-10">
				<Menu name="brands" />
				<Menu name="shop" />
				<div className="underline-yellow hover:underline-yellow">premium</div>
				<div className="underline-yellow hover:underline-yellow">
					gift cards
				</div>
			</div>
			<div className="hidden md:block">
				<Image
					src="/gweiland-logo.webp"
					width={124}
					height={124}
					className="object-contain"
					alt="gweiland company logo"
				/>
			</div>
			<div className="md:hidden">
				<Image
					src="/gweiland-logo.webp"
					width={90}
					height={90}
					className="object-contain"
					alt="gweiland company logo"
				/>
			</div>
			<div className="flex space-x-5 items-center pr-2 md:pr-10">
				<div className="hidden md:block">become a affiliate</div>
				<Twitter fill="white" className="w-5 h-5 hidden md:block" />
				<Facebook fill="white" className="w-5 h-5 hidden md:block" />
				<Instagram className="w-5 h-5 hidden md:block" />
				<UserRound className="w-5 h-5 hidden md:block" />
				<Search className="w-5 h-5" />
				<CartIcon />
			</div>
		</nav>
	);
}

export default NavBar;

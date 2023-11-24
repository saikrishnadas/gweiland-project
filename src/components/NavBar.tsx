import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import {
	Twitter,
	Instagram,
	Facebook,
	UserRound,
	ShoppingBag,
	Search,
} from "lucide-react";
import CartIcon from "./CartIcon";

function NavBar() {
	return (
		<nav className="flex justify-between p-2 secondary-color text-white">
			<div className="flex space-x-7 items-center pl-10">
				<Menu name="brands" />
				<Menu name="shop" />
				<div className="underline-yellow hover:underline-yellow">premium</div>
				<div className="underline-yellow hover:underline-yellow">
					gift cards
				</div>
			</div>
			<div>
				<Image
					src="/gweiland-logo.webp"
					width={124}
					height={124}
					className="object-contain"
					alt="gweiland company logo"
				/>
			</div>
			<div className="flex space-x-5 items-center pr-10">
				<div>become a affiliate</div>
				<Twitter fill="white" className="w-5 h-5" />
				<Facebook fill="white" className="w-5 h-5" />
				<Instagram className="w-5 h-5" />
				<UserRound className="w-5 h-5" />
				<Search className="w-5 h-5" />
				<CartIcon />
			</div>
		</nav>
	);
}

export default NavBar;

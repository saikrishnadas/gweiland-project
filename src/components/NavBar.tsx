import React from "react";
import Image from "next/image";

function NavBar() {
	return (
		<nav className="flex justify-between p-2 secondary-color text-white">
			<div className="flex space-x-8 items-center pl-10">
				<div>brands</div>
				<div>shop</div>
				<div>premium</div>
				<div>gift cards</div>
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
			<div className="flex space-x-10 items-center">
				<div>brands</div>
				<div>shop</div>
				<div>premium</div>
				<div>gift cards</div>
			</div>
		</nav>
	);
}

export default NavBar;

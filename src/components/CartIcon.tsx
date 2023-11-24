import React from "react";
import { ShoppingBag } from "lucide-react";

function CartIcon() {
	return (
		<div className="relative">
			<div className="absolute top-[-10px] right-[-10px] bg-white rounded-full text-black w-5 h-5 flex items-center justify-center">
				<span className="text-[10px]">0</span>
			</div>
			<ShoppingBag className="w-5 h-5" />
		</div>
	);
}

export default CartIcon;

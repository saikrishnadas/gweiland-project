"use client";

import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const items = [
	"all brands",
	"$hosky",
	"bitfins",
	"cardano stonerz club",
	"cryptoraggies",
	"danketsu",
	"future fest",
	"pendulum",
	"vudu brigada",
];

function Menu({ name }: { name: string }) {
	const [isOpen, setIsOpen] = useState<any>(false);

	return (
		<DropdownMenu open={isOpen}>
			<DropdownMenuTrigger asChild>
				<div className={`flex items-center space-x-1 cursor-pointer`}>
					<div
						className="underline-yellow hover:underline-yellow"
						onMouseEnter={() => setIsOpen(true)}
						onMouseOut={() => setIsOpen(false)}
					>
						{name}
					</div>
					<ChevronDown className="w-3 h-3" />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className={`p-5 bg-[#29292A] border-none rounded-none ${
					name === "shop" ? "md:w-[200vw] md:ml-0" : "md:w-[260px] md:ml-5"
				}   md:mt-2 text-white flex flex-col space-y-2`}
			>
				{items.map((item: string, index: number) => (
					<div key={index}>
						<span className="underline-yellow hover:underline-yellow">
							{item}
						</span>
					</div>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default Menu;

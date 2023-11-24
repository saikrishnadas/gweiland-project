"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Scroller = () => {
	const scrollContainerRef: any = useRef(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;

		const cloneAndAppendChildren = () => {
			const children = Array.from(scrollContainer.children);
			children.forEach((child: any) => {
				scrollContainer.appendChild(child.cloneNode(true));
			});
		};

		cloneAndAppendChildren();

		const startScrolling = () => {
			const scrollWidth = scrollContainer.scrollWidth;

			const animation = scrollContainer.animate(
				[
					{ transform: "translateX(0)" },
					{ transform: `translateX(-${scrollWidth}px)` },
				],
				{
					duration: 80000, // Adjust the duration as needed
					iterations: Infinity,
				}
			);

			return () => {
				animation.cancel();
			};
		};

		const cancelScrolling = startScrolling();

		return () => {
			cancelScrolling();
		};
	}, []);

	return (
		<div className="flex w-full" ref={scrollContainerRef}>
			<div className="bg-[#226BD3] min-w-[360px] h-36 m-10 rounded-l-full flex items-center justify-between pr-5">
				<Image
					src="/husky.png"
					width={130}
					height={130}
					className="object-contain rounded-full"
					alt="husky logo"
				/>
				<div className="flex flex-col justify-evenly h-full items-end">
					<div className="text-3xl text-white font-extrabold">$hosky</div>
					<div className="text-white underline">shop now</div>
				</div>
			</div>

			<div className="bg-[#08202C] min-w-[360px] m-10 rounded-l-full flex items-center justify-between pr-5">
				<Image
					src="/bitfin.png"
					width={120}
					height={120}
					className="object-contain rounded-full"
					alt="husky logo"
				/>
				<div className="flex flex-col justify-evenly h-full items-end">
					<div className="text-3xl text-white font-extrabold">bitfin</div>
					<div className="text-white underline">shop now</div>
				</div>
			</div>
			<div className="bg-[#FF8B8B] min-w-[360px] m-10 rounded-l-full flex items-center justify-between pr-5">
				<Image
					src="/cryopt.png"
					width={120}
					height={120}
					className="object-contain rounded-full"
					alt="husky logo"
				/>
				<div className="flex flex-col justify-evenly h-full items-end">
					<div className="text-3xl text-white font-extrabold">crypto</div>
					<div className="text-white underline">shop now</div>
				</div>
			</div>
			<div className="bg-[#000000] min-w-[360px] m-10 rounded-l-full flex items-center justify-between pr-5">
				<Image
					src="/mes.png"
					width={120}
					height={120}
					className="object-contain rounded-full"
					alt="husky logo"
				/>
				<div className="flex flex-col justify-evenly h-full items-end">
					<div className="text-3xl text-white font-extrabold">Mes</div>
					<div className="text-white underline">shop now</div>
				</div>
			</div>
			<div className="bg-[#000000] min-w-[360px] m-10 rounded-l-full flex items-center justify-between pr-5">
				<Image
					src="/pendulum.png"
					width={120}
					height={120}
					className="object-contain rounded-full"
					alt="husky logo"
				/>
				<div className="flex flex-col justify-evenly h-full items-end">
					<div className="text-3xl text-white font-extrabold">pendulum</div>
					<div className="text-white underline">shop now</div>
				</div>
			</div>
		</div>
	);
};

export default Scroller;

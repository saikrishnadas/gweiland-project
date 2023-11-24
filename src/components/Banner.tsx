"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { handlee } from "@/fonts/fonts";

const Banner = ({ images, texts }: { images: string[]; texts: string[] }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const showPreviousImage = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const showNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const getTextAlignment = (index: number): string => {
		// Example: alternate between "left" and "right" for text alignment
		return index % 2 === 0 ? "left" : "right";
	};

	return (
		<div className="h-[100vh] md:h-[90vh] relative overflow-hidden">
			{/* Display the current image */}
			{/* Dark overlay with reduced opacity */}
			<div
				className="absolute inset-0 bg-black opacity-30"
				style={{ mixBlendMode: "multiply" }}
			></div>
			<img
				src={images[currentImageIndex]}
				alt={`Banner ${currentImageIndex + 1}`}
				className="w-full h-full object-cover"
				style={{ mixBlendMode: "multiply" }}
			/>

			{/* Left navigation button */}
			<button
				onClick={showPreviousImage}
				className="hidden md:flex absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-white hover:text-black w-12 h-12 flex items-center justify-center"
			>
				<ArrowLeft className="w-5 h-5" />
			</button>

			{/* Right navigation button */}
			<button
				onClick={showNextImage}
				className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-white hover:text-black w-12 h-12  items-center justify-center"
			>
				<ArrowRight className="w-5 h-5" />
			</button>

			{/* Text on top of the image */}
			<div
				className={`absolute top-[50%] ${
					getTextAlignment(currentImageIndex) === "left"
						? "left-[10%]"
						: "right-[10%]"
				} text-white`}
			>
				{/* <p className={`${handlee.className} antialiased text-4xl font-bold`}>
					{texts[currentImageIndex]}
				</p> */}
				<button
					className={`${
						currentImageIndex === 0
							? "bg-none border text-white hover:bg-white hover:text-black"
							: "bg-white text-black hover:bg-black hover:text-white"
					}  rounded-full w-32 h-12  transition-all duration-300`}
				>
					shop now
				</button>
			</div>
		</div>
	);
};

export default Banner;

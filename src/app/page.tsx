import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import Scroller from "../components/Scroller";
import Image from "next/image";

export default function Home() {
	const images = [
		"/banner.png",
		"/banner2.png",
		"/banner4.png",
		"/banner1.png",
		"/banner3.png",
	];
	const texts = [
		"premium zip hoodies",
		"heritage women's tanks",
		"heritage hoodies",
		"heritage tees",
		"premium tees",
	];
	return (
		<main>
			<div className="fixed top-0 left-0 w-full z-50">
				<TopBar />
				<NavBar />
			</div>
			<div className=" pt-24 md:pt-32">
				<Banner images={images} texts={texts} />
				<Scroller />
			</div>
			{/* <div className="flex">

			</div> */}
		</main>
	);
}

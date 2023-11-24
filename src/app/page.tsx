import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import Scroller from "../components/Scroller";
import Image from "next/image";

export default function Home() {
	const images = [
		"/banner.png",
		"/banner1.png",
		"/banner2.png",
		"/banner4.png",
		"/banner4.png",
	];
	const texts = [
		"premium zip hoodies",
		"/banner1.png",
		"/banner2.png",
		"/banner4.png",
		"/banner4.png",
	];
	return (
		<main>
			<TopBar />
			<NavBar />
			<Banner images={images} texts={texts} />
			<Scroller />
			{/* <div className="flex">

			</div> */}
		</main>
	);
}

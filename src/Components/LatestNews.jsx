import MarqueePackage from "react-fast-marquee";

// If Vite wrapped it in an object, unwrap it:
const Marquee = MarqueePackage.default
	? MarqueePackage.default
	: MarqueePackage;

// console.log(MarqueePackage.default);

const LatestNews = () => {
	return (
		<div className="flex items-center gap-3 bg-base-200 p-3">
			<p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
			<Marquee
				pauseOnHover={true}
				speed={55}
				className="text-lg leading-7.5 font-medium flex gap-5"
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
					atque commodi aperiam nulla repudiandae deserunt.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
					atque commodi aperiam nulla repudiandae deserunt.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
					atque commodi aperiam nulla repudiandae deserunt.
				</p>
			</Marquee>
		</div>
	);
};

export default LatestNews;

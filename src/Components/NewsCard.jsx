import { FiBookmark, FiShare2 } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { format } from "date-fns";
import { IoEye } from "react-icons/io5";

const NewsCard = ({ news }) => {
	// Destructuring the provided dataset
	const { title, rating, total_view, author, image_url, details, tags } = news;

	// Format dates using date-fns to mirror image_94baff.png exactly
	const headerDate = author?.published_date
		? format(new Date(author.published_date), "yyyy-MM-dd")
		: "";

	const inlineBodyDate = author?.published_date
		? format(new Date(author.published_date), "eeee, MMMM dd, yyyy")
		: "";

	// Helper logic to render interactive/visual 5-star layout matching your rating data
	const renderStars = (ratingValue) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= Math.round(ratingValue || 0)) {
				stars.push(<FaStar key={i} className="text-orange-400 text-lg" />);
			} else {
				stars.push(<FaRegStar key={i} className="text-orange-400 text-lg" />);
			}
		}
		return stars;
	};

	return (
		<div className="card bg-base-100 border border-gray-200 rounded-md  mx-auto overflow-hidden shadow-sm">
			{/* 1. Header Section (Gray Header Banner Area) */}
			<div className="flex justify-between items-center bg-gray-50 px-5 py-4 border-b border-gray-100">
				<div className="flex items-center gap-3">
					<div className="avatar">
						<div className="w-11 rounded-full ring ring-offset-2 ring-gray-100">
							<img src={author?.img} alt={author?.name || "Author"} />
						</div>
					</div>
					<div>
						<h4 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
							{author?.name}
						</h4>
						<p className="text-xs text-gray-400 mt-0.5 font-medium">
							{headerDate}
						</p>
					</div>
				</div>
				<div className="flex gap-3 text-gray-500 text-xl cursor-pointer">
					<FiBookmark className="hover:text-gray-800 transition-colors" />
					<FiShare2 className="hover:text-gray-800 transition-colors" />
				</div>
			</div>

			{/* 2. Main Content Body Area */}
			<div className="p-5 flex flex-col grow">
				{/* Title */}
				<h2 className="text-xl font-extrabold text-gray-800 leading-snug mb-4 hover:text-orange-500 cursor-pointer transition-colors">
					{title}
				</h2>

				{/* News Thumbnail Image */}
				<div className="mb-4">
					<img
						src={image_url}
						alt={title}
						className="w-full h-64 sm:h-72 object-cover rounded-md"
					/>
				</div>

				{/* Dynamic Inline Metadata & Paragraph Details */}
				<div className="text-sm text-gray-500 leading-relaxed mb-4 grow">
					<span className="text-gray-400 font-medium">{inlineBodyDate}</span>
					<span className="text-gray-400 font-medium">
						{" "}
						| Tag Cloud Tags: {tags?.join(", ")} —{" "}
					</span>
					<span className="text-gray-600 font-normal">
						{details?.length > 270 ? `${details.slice(0, 270)}...` : details}
					</span>
					<span className="block mt-2 text-orange-500 font-bold cursor-pointer hover:underline w-fit">
						Read More
					</span>
				</div>

				{/* Slimline Divider Line */}
				<hr className="border-t border-gray-200 my-2" />

				{/* 3. Footer Metrics Section */}
				<div className="flex justify-between items-center mt-3">
					{/* Star Rating Layout */}
					<div className="flex items-center gap-1">
						<div className="flex gap-0.5">{renderStars(rating?.number)}</div>
						<span className="text-sm font-bold text-gray-500 ml-1.5 mt-0.5">
							{rating?.number ? rating.number.toFixed(1) : "0.0"}
						</span>
					</div>

					{/* Total Views Layout */}
					<div className="flex items-center gap-2 text-gray-500 text-base font-semibold">
						<IoEye className="text-xl text-gray-600" />
						<span>{total_view?.toLocaleString() || 0}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;

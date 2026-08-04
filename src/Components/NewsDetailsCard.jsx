import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
	return (
		<div className="border rounded-[5px] border-[#E7E7E7] p-7.5">
			<img className="w-full object-cover" src={news.image_url} alt="" />

			<h2 className="text-2xl mt-5 font-bold leading-11">{news.title}</h2>

			<p className="text-[#706F6F] mt-2 leading-6">{news.details}</p>

			<Link
				className="btn btn-secondary rounded-none mt-8 px-7 py-6"
				to={`/category/${news.category_id}`}
			>
				<GoArrowLeft className="text-2xl"></GoArrowLeft>
				<span className="text-xl font-medium">All News In this Category</span>
			</Link>
		</div>
	);
};

export default NewsDetailsCard;

import { useLoaderData, useParams } from "react-router";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import { useEffect, useState } from "react";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
	const data = useLoaderData();
	const { id } = useParams();
	const [news, setNews] = useState({});

	useEffect(() => {
		const newsDetails = data.find((singleNews) => singleNews.id === id);
		setNews(newsDetails);

		scrollTo({ top: 0, behavior: "smooth" });
	}, [data, id]);

	// console.log(data, id, news);

	return (
		<div>
			<header className="mt-10">
				<Header></Header>
			</header>
			<main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
				<section className="col-span-9">
					<h2 className="font-bold mb-5">News Details</h2>
					<NewsDetailsCard news={news}></NewsDetailsCard>
				</section>
				<aside className="col-span-3">
					<RightAside></RightAside>
				</aside>
			</main>
		</div>
	);
};

export default NewsDetails;

import Header from "../Components/Header";

const Loading = () => {
	return (
		<div className="h-screen">
			<header className="mt-10">
				<Header></Header>
			</header>
			<div className="h-[50%] flex justify-center items-center">
				<span className="loading loading-bars loading-xl"></span>
			</div>
		</div>
	);
};

export default Loading;

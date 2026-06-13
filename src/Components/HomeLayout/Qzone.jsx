import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";

const Qzone = () => {
	return (
		<div className="bg-base-200 p-3">
			<h2 className="font-bold mb-5">Q-Zone</h2>
			<div className="space-y-5 w-full">
				<img className="w-full" src={swimmingImg} alt="" />
				<img className="w-full" src={classImg} alt="w-full" />
				<img className="w-full" src={playImg} alt="" />
			</div>
		</div>
	);
};

export default Qzone;

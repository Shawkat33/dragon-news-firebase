import { format } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<div className="flex justify-center flex-col items-center gap-3">
			<img className="w-100" src={logo} alt="" />
			<p className="text-accent">The Bangladeshi News</p>
			<p className="text-accent font-medium text-xl leading-7.5">
				<span className="text-black">{format(new Date(), "EEEE, ")}</span>
				{format(new Date(), "MMMM dd, yyyy")}
			</p>
		</div>
	);
};

export default Header;

import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center">
			<div className="blank_left flex-1 justify-start h-full"></div>
			<div className="nav flex flex-1 gap-5 justify-center text-accent text-lg">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/career">Career</NavLink>
			</div>
			<div className="login-btn flex gap-5 flex-1 justify-end">
				<img src={user} alt="" />
				<button className="btn btn-primary px-10">Login</button>
			</div>
		</div>
	);
};

export default Navbar;

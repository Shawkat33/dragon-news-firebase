import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
	const { user, logOut } = use(AuthContext);

	const handleLogOut = () => {
		console.log("User Trying to Log Out!");
		logOut()
			.then(() => {
				alert("You Logged Out Succesfully!");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="flex justify-between items-center">
			<div>{user && user.email}</div>
			<div className="blank_left flex-1 justify-start h-full"></div>
			<div className="nav flex flex-1 gap-5 justify-center text-accent text-lg">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/career">Career</NavLink>
			</div>
			<div className="login-btn flex gap-5 flex-1 justify-end">
				<img src={userIcon} alt="" />
				{user ? (
					<button onClick={handleLogOut} className="btn btn-primary px-10">
						Log Out
					</button>
				) : (
					<Link to="/auth/login" className="btn btn-primary px-10">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;

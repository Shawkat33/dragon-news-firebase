import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
	return (
		<div className="flex flex-col bg-base-200 h-screen">
			<header className="w-11/12 mx-auto py-4">
				<Navbar></Navbar>
			</header>
			<main className="w-11/12 mx-auto py-5 flex-1 overflow-auto">
				<Outlet></Outlet>
			</main>
		</div>
	);
};

export default AuthLayout;

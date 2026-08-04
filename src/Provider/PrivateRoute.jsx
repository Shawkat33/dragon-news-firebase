import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
	const { user, userLoading } = use(AuthContext);

	const location = useLocation();
	console.log(location);

	console.log(user);

	if (userLoading) {
		return <Loading></Loading>;
	}
	// If user is logged in return children

	if (user && user?.email) {
		return children;
	}

	// If no user is logged in redirect to Login

	return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;

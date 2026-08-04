import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
	const [error, setError] = useState("");
	const { signIn } = use(AuthContext);
	const location = useLocation();
	console.log(location);
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signIn(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
				console.log(user);
				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch((err) => {
				const errCode = err.code;
				// const errMessage = err.message;
				// alert(errCode, errMessage);
				setError(errCode);
			});
	};

	return (
		<div className="flex justify-center items-center h-full">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-6">
				<h2 className="font-semibold text-2xl text-center">
					Login to Your Account
				</h2>
				<form onSubmit={handleLogin} className="card-body">
					<fieldset className="fieldset">
						{/* Email */}

						<label className="label">Email</label>
						<input
							name="email"
							type="email"
							className="input"
							placeholder="Email"
							required
						/>

						{/* Password */}

						<label className="label">Password</label>
						<input
							name="password"
							type="password"
							className="input"
							placeholder="Password"
							required
						/>
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>

						{error && <p className="text-red-400 text-xs">{error}</p>}

						<button type="submit" className="btn btn-neutral mt-4">
							Login
						</button>
					</fieldset>
					<p className="font-semibold text-center pt-2 overflow-hidden">
						Dont’t Have An Account ?{" "}
						<Link
							to="/auth/register"
							style={{ WebkitBackgroundClip: "text", willChange: "transform" }}
							className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent hover:scale-130 duration-150 origin-left ease-in-out transform transition-transform inline-block"
						>
							Register
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;

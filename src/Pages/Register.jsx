import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use, useState } from "react";

const Register = () => {
	const [nameError, setNameError] = useState("");

	const { createUser, setUser, updateUser } = use(AuthContext);

	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();

		console.log(e.target);

		const form = e.target;

		const name = form.name.value;
		
		if (name.length < 5) {
			setNameError("Name should be more than 5 characters.");
			return;
		} else {
			setNameError("");
		}
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;

		console.log({ name, photoURL, email, password });
		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				updateUser({
					displayName: name,
					photoURL: photoURL,
				}).then(() => {
					setUser({...user, displayName: name, photoURL: photoURL});
					navigate("/");
				}).catch((err) => {
					console.log(err);
				});
				
			})
			.catch((err) => {
				const errorCode = err.code;
				const errorMessage = err.message;
				alert(errorMessage);
			});
	};

	return (
		<div className="flex justify-center items-center h-full">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-6">
				<h2 className="font-semibold text-2xl text-center">
					Register Your Account
				</h2>
				<form onSubmit={handleRegister} className="card-body">
					<fieldset className="fieldset">
						{/* Name */}

						<label className="label">Name</label>
						<input
							type="text"
							name="name"
							className="input"
							placeholder="Your Name"
							required
						/>

						{nameError && <p className="text-error text-xs">{nameError}</p>}

						{/* Photo URL */}

						<label className="label">Photo URL</label>
						<input
							type="text"
							name="photoURL"
							className="input"
							placeholder="https://your-photo-url.here"
							required
						/>

						{/* Email */}

						<label className="label">Email</label>
						<input
							type="email"
							name="email"
							className="input"
							placeholder="give@me.email"
							required
						/>

						{/* Password */}

						<label className="label">Password</label>
						<input
							type="password"
							name="password"
							className="input"
							placeholder="Password"
							required
						/>
						<button type="submit" className="btn btn-neutral mt-4">
							Register
						</button>
					</fieldset>
					<p className="font-semibold text-center pt-2 overflow-hidden">
						Already Have An Account ?{" "}
						<Link
							to="/auth/login"
							style={{ WebkitBackgroundClip: "text", willChange: "transform" }}
							className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent hover:scale-130 duration-150 origin-left ease-in-out transform transition-transform inline-block"
						>
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;

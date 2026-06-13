import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
	return (
		<div>
			<h2 className="font-semibold mb-5">Login With</h2>
			<div className="flex flex-col gap-3">
				<button className="btn btn-outline btn-info">
					<FaGoogle size={20} /> Login with Google
				</button>
				<button className="btn btn-outline btn-primary">
					<FaGithub size={20} />
					Login with GitHub
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;

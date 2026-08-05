import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userLoading, setUserLoading] = useState(true);

	console.log(user, userLoading);

	const createUser = (email, password) => {
		setUserLoading(true);

		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setUserLoading(true);

		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUser = (updatedData) => {
		if (auth.currentUser) {
			return updateProfile(auth.currentUser, updatedData);
		}
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setUserLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authData = {
		user,
		setUser,
		createUser,
		logOut,
		signIn,
		userLoading,
		setUserLoading,
		updateUser,
	};

	return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCr84QMP-VO4oAg08QkjrjtRUBmyR1VA-c",
	authDomain: "dragon-news-firebase-2e4a2.firebaseapp.com",
	projectId: "dragon-news-firebase-2e4a2",
	storageBucket: "dragon-news-firebase-2e4a2.firebasestorage.app",
	messagingSenderId: "528072218879",
	appId: "1:528072218879:web:18d50857cd6228f39fd4ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
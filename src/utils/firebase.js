import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
	apiKey: "AIzaSyAnv-is5uVQ1jKlENNe2P2dpE6R9EMmjz0",
	authDomain: "infinity-2k20.firebaseapp.com",
	databaseURL: "https://infinity-2k20.firebaseio.com",
	projectId: "infinity-2k20",
	storageBucket: "infinity-2k20.appspot.com",
	messagingSenderId: "59634097320",
	appId: "1:59634097320:web:fe749f05f7b5bf5b5ff69d",
	measurementId: "G-4XS76BTYKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
self.FIREBASE_APPCHECK_DEBUG_TOKEN = "5BB594AC-90C7-4F21-92F1-ABBC79F38F26";
const appCheck = initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider("6Lf6vKQdAAAAAPnGz_Nv5rUw75HmaRhLCV_MhyRt"),

	// Optional argument. If true, the SDK automatically refreshes App Check
	// tokens as needed.
	isTokenAutoRefreshEnabled: true,
});
const database = getDatabase(app);
export default database;

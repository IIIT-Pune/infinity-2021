import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_apiKey,
	authDomain: import.meta.env.VITE_APP_authDomain,
	databaseURL: import.meta.env.VITE_APP_databaseURL,
	projectId: "infinity-2k20",
	storageBucket: import.meta.env.VITE_APP_storageBucket,
	messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
	appId: import.meta.env.VITE_APP_appId,
	measurementId: import.meta.env.VITE_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (window.location.hostname === "localhost")
	self.FIREBASE_APPCHECK_DEBUG_TOKEN =
		import.meta.env.VITE_APP_FIREBASE_APPCHECK_DEBUG_TOKEN;
const appCheck = initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider(import.meta.env.VITE_APP_RECAPTCHA_KEY),

	// Optional argument. If true, the SDK automatically refreshes App Check
	// tokens as needed.
	isTokenAutoRefreshEnabled: true,
});
const database = getDatabase(app);
export default database;

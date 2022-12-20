import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { SignIn } from '~types/api/google/firebase/auth/signIn';

export async function signIn({ email, password }: SignIn) {
	const auth = getAuth();
	return signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => userCredential)
		.catch((error) => ({
			errorCode: error.code,
			errorMessage: error.message,
		}));
}
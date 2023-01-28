import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '~api/google/firebase/firebase';
import { useNoStartTransitions } from '~hooks/useNoStartTransitions';
import { useViewportHeight } from '~hooks/useViewportHeight';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { userSlice } from '~store/user/userSlice';
import { sendAnalyticsData } from '~utils/analytics/sendAnalyticsData';

interface AppInit {
	children: React.ReactElement;
	onIsInitChange: (arg: boolean) => void;
}

export function AppInit({ children, onIsInitChange }: AppInit) {
	useViewportHeight();

	const dispatch = useTypedDispatch();
	const { actions } = userSlice;

	const navigate = useNavigate();
	const location = useLocation();

	const [startLocation] = useState(location);
	// initLocalStorage();

	useEffect(() => {
		const initFetch = async () => {
			let init = true;
			onAuthStateChanged(auth, (user) => {
				if (user) {
					dispatch(actions.setUser({
						displayName: user.displayName?.toString(),
						email: user.email?.toString(),
						photoURL: user.photoURL?.toString(),
						uid: user.uid?.toString(),
					}));
				}
				if (init) {
					navigate(startLocation);
					onIsInitChange(false);
					init = false;
				}
			});
			await sendAnalyticsData();
		};
		initFetch();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return children;
}
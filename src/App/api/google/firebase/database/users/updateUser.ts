import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';

import type { ErrorResponse } from '~types/api/google/firebase/commons/ErrorResponse';
import type { SuccessResponse } from '~types/api/google/firebase/commons/SuccessResponse';
import type { User } from '~types/api/google/firebase/commons/User';

import { db } from '../../firebase';
import { returnError } from '../../helpers/returnError';
import { returnSuccess } from '../../helpers/returnSuccess';

export interface UpdateGroupInfo extends Partial<User> {
	uid: string;
}

const filePath = 'src/App/api/google/firebase/database/groups/updateGroupInfo.ts';

export async function updateUser({
	uid, displayName, photoURL, email, role, sex, lastActiveChatId, isOnline,
}: UpdateGroupInfo): Promise<SuccessResponse | ErrorResponse> {
	const usersRef = doc(db, 'users', uid);
	try {
		const user = {} as UpdateGroupInfo;
		if (displayName) user.displayName = displayName;
		if (photoURL) user.photoURL = photoURL;
		if (email) user.email = email;
		if (role) user.role = role;
		if (sex) user.sex = sex;
		if (lastActiveChatId) user.lastActiveChatId = lastActiveChatId;
		user.lastVisitDate = serverTimestamp().toString(); // TODO: Fix to milliseconds
		if (isOnline) user.isOnline = isOnline;
		await updateDoc(usersRef, { user });
		return returnSuccess();
	} catch (error) {
		return returnError(filePath, error);
	}
}
import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getUserSuggestedProfile(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();

  const user = result.docs
    .map((item) => ({
      ...item.data(),
      docId: item.id,
    }))
    .filter(
      (suggestUser) =>
        suggestUser.userId !== userId && !following.includes(suggestUser.userId)
    );

  return user;
}

// Follow and Unfollow Toggle
export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isFollowing
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowing
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUsersFollowers(
  spDocId,
  loggeduserId,
  isFollowing
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(spDocId)
    .update({
      followers: isFollowing
        ? FieldValue.arrayRemove(loggeduserId)
        : FieldValue.arrayUnion(loggeduserId),
    });
}

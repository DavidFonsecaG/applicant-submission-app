import { db } from "./firebase";

const firestoreService = {
  getUserById: async (userId) => {
    try {
      const userDoc = await db.collection("users").doc(userId).get();
      return userDoc.data();
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error; // Rethrow the error to allow higher-level error handling
    }
  },
  updateUser: async (userId, newData) => {
    try {
      await db.collection("users").doc(userId).update(newData);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error; // Rethrow the error to allow higher-level error handling
    }
  },
  getUserWithRoleById: async (userId) => {
    try {
      const userDoc = await db.collection("users").doc(userId).get()
      return userDoc.data();    
    } catch (error) {
      console.error("Error updating user:", error);
      throw error; // Rethrow the error to allow higher-level error handling
    }
  },
};

export default firestoreService;

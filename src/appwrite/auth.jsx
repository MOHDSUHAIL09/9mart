// src/services/authService.js
import { Client, Account, ID } from "appwrite";

// Client Setup
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

const authService = {
  // Signup + Auto Login
  createAccount: async ({ email, password, name }) => {
    try {
      await account.create(ID.unique(), email, password, name);
      await account.createEmailSession(email, password);
      const user = await account.get();
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Login
  login: async ({ email, password }) => {
    try {
      await account.createEmailSession(email, password);
      return await account.get();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get logged-in user
  getCurrentUser: async () => {
    try {
      return await account.get();
    } catch (error) {
      throw new Error("Not logged in");
    }
  },

  // Logout
  logout: async () => {
    try {
      await account.deleteSession("current");
    } catch (error) {
      throw new Error("Logout failed");
    }
  },
};

export default authService;

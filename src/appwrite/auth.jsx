import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

const authService = {
  createAccount: ({ email, password, name }) =>
    account.create(ID.unique(), email, password, name),

  login: ({ email, password }) =>
    account.createEmailSession(email, password),

  getCurrentUser: () => account.get(),

  logout: () => account.deleteSession('current'),
};

export default authService;

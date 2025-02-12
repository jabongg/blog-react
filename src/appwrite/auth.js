import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"; // Importing configuration

const client = new Client();
const account = new Account(client);

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId); // Setting endpoint and project

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client = client; // Assigning the client
        this.account = account; // Assigning the account
    }

    async login() {
        try {
            const email = import.meta.env.VITE_APPWRITE_EMAIL; // Get email from environment variable
            const password = import.meta.env.VITE_APPWRITE_PASSWORD; // Get password from environment variable
            const session = await this.account.createEmailPasswordSession(email, password);
            return session; // Return session information        } catch (error) {
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log('Logged in user:', user.name); // Print the username
            return user;

        } catch (error) {
            console.error('Error fetching current user:', error);
            throw error; // Rethrow the error for handling in the calling function
        } 
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite logout");
            throw error;
        } 
    }
}

const authService = new AuthService();

export default authService;

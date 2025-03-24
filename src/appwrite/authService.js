import {Client, Account, ID} from 'appwrite'
import config from '../config/config';

const client = new Client();
client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId);


const account = new Account(client);

async function createAccount ({email, password, fullName}) {
    try {
        // first check if user already exist.
        const userAccount = await account.create(ID.unique(), email, password, fullName);
        if(userAccount) {
            return login({email, password});
        } else {
            throw error;
        }
    } catch (err) {
        if(err.type === "user_already_exists") {
            throw new Error("A user with the same email already exists.");
        } else if(err.type === "user_email_already_exists") {
            throw new Error("A user with the same email already exists.");
        } else if(err.type === "user_phone_already_exists") {
            throw new Error("A user with the same phone number already exists.");
        } else if(err.type === "user_invalid_credentials") {
            throw new Error("Please provide valid credentials.");
        }
        throw new Error("Something went wrong, try again!");
    }
}

async function login ({email, password}) {
    try {
        const response = await account.createEmailPasswordSession(email, password);
        return response;
    } catch (error) {
        console.error(error);
        console.error(error.type);
        console.error(error.message);
        if(error.type === "user_invalid_credentials") {
            throw new Error("Invalid credentials. Please check the email and password.");
        }
    }
}

async function getCurrentUser() {
    try {
        return await account.get();
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error.message);
        return false;
    }
}

async function logout (sessionId) {
    try {
        const result = await account.deleteSessions();
        return result;
    } catch (error) {
        console.error(error);
    }
}

const authService =  { createAccount, login, logout, getCurrentUser};
export default authService;
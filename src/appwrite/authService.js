import {Client, Account, ID} from 'appwrite'
import config from '../config/config';

const client = new Client();
client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId);


const account = new Account(client);

async function createAccount ({email, password, fullName}) {
    try {
        console.log(fullName);
        const userAccount = await account.create(ID.unique(), email, password, fullName)
        console.log('account created');
        if(userAccount) {
            console.log('login initiated')
            return login({email, password});
        } else {
            console.log('i am three')
            throw error;
        }
    } catch (err) {
        console.log('i am error');
        console.error(err);
    }
}

async function login ({email, password}) {
    try {
        const response = await account.createEmailPasswordSession(email, password);
        // console.log("loged in: ",response);
        return response;
    } catch (error) {
        console.error(error);
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
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

const authService =  { createAccount, login, logout, getCurrentUser};
export default authService;
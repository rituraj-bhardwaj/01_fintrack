
import { Client, Databases, Storage, ID, Query } from "appwrite";
import config from "../config/config";

const client = new Client()
.setEndpoint(config.appwriteUrl)
.setProject(config.appwriteProjectId);

const databases = new Databases(client);

// user info collection....
async function createUserInfo({name, email, created_at}) {
    const user_id = ID.unique();
    try {
        return await databases.createDocument(
            config.appwriteDatabseId,
            config.appwriteUsersCollectionId,
            user_id,
            {user_id, name, email, created_at}
        );
    } catch (error) {
        console.error("Appwrite service :: createPost :: error", error);
        return error;
    }
}

async function getUserInfo(user_id) {
    try {
        return await databases.getDocument(
            config.appwriteDatabseId,
            config.appwriteUsersCollectionId,
            user_id
        )
    } catch (error) {
        console.error("Appwrite service :: readPost :: error", error);
        return error;
    }
}

async function updateUserInfo({user_id, name, email, created_at}) {
    try {
        return await databases.updateDocument(
            config.appwriteDatabseId,
            config.appwriteUsersCollectionId,
            user_id,
            {
                user_id, name, email, created_at
            }
        );
    } catch (error) {
        console.error("Appwrite service :: updatePost :: error", error);
        return error;
    }
}


// income collection..
async function createIncome({user_id, monthly_income, created_at}) {
    const income_id = ID.unique();
    try {
        return await databases.createDocument(
            config.appwriteDatabseId,
            config.appwriteIncomeCollectionId,
            income_id,
            {user_id, income_id, monthly_income, created_at}
        );
    } catch (error) {
        console.error("Appwrite service :: createPost :: error", error);
        return error;
    }
}

async function getIncome(income_id) {
    try {
        return await databases.getDocument(
            config.appwriteDatabseId,
            config.appwriteIncomeCollectionId,
            income_id
        )
    } catch (error) {
        console.error("Appwrite service :: readPost :: error", error);
        return error;
    }
}

async function updateIncome({user_id, income_id, monthly_income, created_at}) {
    try {
        return await databases.updateDocument(
            config.appwriteDatabseId,
            config.appwriteIncomeCollectionId,
            income_id,
            {
                user_id, income_id, monthly_income, created_at
            }
        );
    } catch (error) {
        console.error("Appwrite service :: updatePost :: error", error);
        return error;
    }
}

// plan_categoryWise_exp(), get_planned_categoryWise_exp(), update_planned_categoryWise_exp()
async function plan_categoryWise_exp({user_id, fixed_exp, food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp}) {
    const category_id = ID.unique();
    try {
        return await databases.createDocument(
            config.appwriteDatabseId,
            config.appwriteCategoryExpCollectionId,
            category_id,
            {user_id, category_id, fixed_exp, food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp}
        );
    } catch (error) {
        console.error("Appwrite service :: createPost :: error", error);
        return error;
    }
}

async function get_planned_categoryWise_exp(category_id) {
    try {
        return await databases.getDocument(
            config.appwriteDatabseId,
            config.appwriteCategoryExpCollectionId,
            category_id
        )
    } catch (error) {
        console.error("Appwrite service :: readPost :: error", error);
        return error;
    }
}

async function update_planned_categoryWise_exp({user_id, category_id, fixed_exp, food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp}) {
    try {
        return await databases.updateDocument(
            config.appwriteDatabseId,
            config.appwriteCategoryExpCollectionId,
            category_id,
            {
                user_id, category_id, fixed_exp, food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp
            }
        );
    } catch (error) {
        console.error("Appwrite service :: updatePost :: error", error);
        return error;
    }
}


// create_actual_exp(), get_actual_exp(), update_actual_exp()
async function create_actual_exp({user_id, fixed_exp, Food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp}) {
    const actual_exp_id = ID.unique();
    try {
        return await databases.createDocument(
            config.appwriteDatabseId,
            config.appwriteActualExpCollectionId,
            actual_exp_id,
            {user_id, actual_exp_id, fixed_exp, Food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp}
        );
    } catch (error) {
        console.error("Appwrite service :: createPost :: error", error);
        return error;
    }
}

async function get_actual_exp(actual_exp_id) {
    try {
        return await databases.getDocument(
            config.appwriteDatabseId,
            config.appwriteActualExpCollectionId,
            actual_exp_id
        )
    } catch (error) {
        console.error("Appwrite service :: readPost :: error", error);
        return error;
    }
}

async function update_actual_exp({user_id, actual_exp_id, fixed_exp, Food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp}) {
    try {
        return await databases.updateDocument(
            config.appwriteDatabseId,
            config.appwriteActualExpCollectionId,
            actual_exp_id,
            {
                user_id, actual_exp_id, fixed_exp, Food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp
            }
        );
    } catch (error) {
        console.error("Appwrite service :: updatePost :: error", error);
        return error;
    }
}


// create_collections_id(), get_collections_id(), update_collections_id()
async function create_collections_id({user_id, actual_exp_id, income_id, planned_category_exp_id}) {
    const this_collection_id = ID.unique();
    try {
        return await databases.createDocument(
            config.appwriteDatabseId,
            config.appwriteCollectionsCollectionId,
            this_collection_id,
            {user_id, this_collection_id, actual_exp_id, income_id, planned_category_exp_id}
        );
    } catch (error) {
        console.error("Appwrite service :: createPost :: error", error);
        return error;
    }
}

async function get_collections_id(this_collection_id) {
    try {
        return await databases.getDocument(
            config.appwriteDatabseId,
            config.appwriteCollectionsCollectionId,
            this_collection_id
        )
    } catch (error) {
        console.error("Appwrite service :: readPost :: error", error);
        return error;
    }
}

async function update_collections_id({user_id, this_collection_id, actual_exp_id, income_id, planned_category_exp_id}) {
    try {
        return await databases.updateDocument(
            config.appwriteDatabseId,
            config.appwriteCollectionsCollectionId,
            this_collection_id,
            {
                user_id, this_collection_id, actual_exp_id, income_id, planned_category_exp_id
            }
        );
    } catch (error) {
        console.error("Appwrite service :: updatePost :: error", error);
        return error;
    }
}


const databaseService = {
    createUserInfo,
    getUserInfo,
    updateUserInfo,
    createIncome,
    getIncome,
    updateIncome,
    plan_categoryWise_exp,
    get_planned_categoryWise_exp,
    update_planned_categoryWise_exp,
    create_actual_exp,
    get_actual_exp,
    update_actual_exp,
    create_collections_id,
    get_collections_id,
    update_collections_id
}

export default databaseService;
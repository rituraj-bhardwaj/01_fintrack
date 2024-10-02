const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteIncomeCollectionId: String(import.meta.env.VITE_APPWRITE_INCOME_COLLECTION_ID),
    appwriteUsersCollectionId: String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
    appwriteCategoryExpCollectionId: String(import.meta.env.VITE_APPWRITE_PLANNED_CATEGORY_COLLECTION_ID),
    appwriteActualExpCollectionId: String(import.meta.env.VITE_APPWRITE_ACTUAL_EXP_COLLECTION_ID),
    appwriteCollectionsCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTIONS_COLLECTION_ID),
}

export default config;
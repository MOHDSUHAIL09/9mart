import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf.js";

export class OrderService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    // ✅ Order create karne ka function (with fixed "Price")
    async createOrder({  productName, Price, quantity, userEmail, userId, paymentStatus }) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteOrdersCollectionId,
                ID.unique(),
                {
                   // Optional field, Appwrite mein nahi hai
                    productName,                // ✅ Required (String)
                    Price: Price,               // ✅ Capital "P" hona zaroori hai
                    quantity,                   // ✅ Required (Integer)
                    userEmail,                  // ✅ Required (String)
                    userId,                     // ✅ Required (String)
                    paymentStatus,              // ✅ Required (String)
                    timestamp: new Date().toISOString() // ✅ Required (Datetime)
                   
                }
            );

            return response;
        } catch (error) {
            console.error("❌ Order create error:", error);
            throw error;
        }
    }
}

const orderService = new OrderService();
export default orderService;

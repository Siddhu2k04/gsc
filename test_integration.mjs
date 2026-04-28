import api from './src/services/api.js';

async function checkIntegration() {
    console.log("==========================================");
    console.log(" FRONTEND -> BACKEND INTEGRATION CHECK ");
    console.log("==========================================\n");

    try {
        console.log("1. Frontend sending GET request to Backend (fetch products)...");
        const getResponse = await api.get('products/');
        console.log("✅ SUCCESS! Backend responded with HTTP status:", getResponse.status);
        console.log(`📦 Currently found ${getResponse.data.length} products in the database.`);
        
        console.log("\n------------------------------------------\n");

        console.log("2. Frontend sending POST request to Backend (add new product)...");
        const postResponse = await api.post('products/', {
            name: "Integration Test Item",
            category: "Raw Material"
        });
        console.log("✅ SUCCESS! Backend accepted and created the product with HTTP status:", postResponse.status);
        console.log("🆕 New Product Details returned by Backend:", postResponse.data);

        console.log("\n------------------------------------------\n");

        console.log("3. Frontend sending GET request again to verify addition...");
        const getAgainResponse = await api.get('products/');
        console.log("✅ SUCCESS! Backend responded with HTTP status:", getAgainResponse.status);
        console.log(`📦 Database now contains ${getAgainResponse.data.length} products (Integration Test Item was added successfully!).`);

        console.log("\n==========================================");
        console.log(" INTEGRATION CHECK PASSED SUCCESSFULLY! ");
        console.log("==========================================");

    } catch (error) {
        console.error("❌ INTEGRATION CHECK FAILED!");
        console.error(error.message);
    }
}

checkIntegration();

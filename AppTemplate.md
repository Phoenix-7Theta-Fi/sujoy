### **App Overview**

This app streamlines operations for a fertilizer manufacturing company, managing orders, production, inventory, and customer relationships seamlessly.

1. **Order Placement:** Receptionists create orders, wait for payment confirmation, and generate tickets.
2. **Order Fulfillment:** Production teams pack orders, update quantities, and mark them as fulfilled.
3. **Notifications:** Receptionists are notified of completed orders and handle customer communication.
4. **CRM Module:** Tracks customer profiles, order history, and generates behavioral reports.
5. **Production Planning:** Supervisors initiate batches, check raw materials, and manage production.
6. **Inventory Management:** Tracks raw materials and finished goods, updates stock, and generates reports.

The app ensures efficient order processing, production, and inventory control while enhancing customer relationship management.

Lets build this using MERN stack. 

Here is the connection string for MongoDB running on the cloud :: 


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Harsha:<db_password>@cluster0.od1gf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

And here is the password :: harsha
import express from "express";
import ConnectDB from "../config/connectDB";
import ContactModel from "./models/contact.model";

var app = express();
//connect to MongoDB
ConnectDB();

app.get('/test-database', async (req, res) => {
    try{
			let item = {
				userId: "230928", 
   			contactId: "sdskdj", 
			};
			let contact = await ContactModel.createNew(item);
			res.send(contact);
    }
    catch (err) {
      console.log(err); 
    };
    
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`HEllo, i'm running at http://${process.env.APP_HOST}:${process.env.APP_PORT}/`)
})

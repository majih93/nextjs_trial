// used to connect to DB
import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  // if already connected, return and exit function
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // if not connected, connect to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? "", {
      dbName: "share_prompt",
      // useNewUrlParser: true,
      // userUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

// Why save user data to MongoDB when loggin in is possible without the database?
// -> to save prompts and link then with specific users

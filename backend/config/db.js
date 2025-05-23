// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://asiq:asiq123@cluster0.hb91job.mongodb.net/food').then(()=>console.log('DB connected')
//     )
// }



import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://asiq:asiq123@cluster0.hb91job.mongodb.net/food', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};


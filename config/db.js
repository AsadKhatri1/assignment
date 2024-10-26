import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hafizasad398:dadabhai123@cluster0.3vklw.mongodb.net/task"
    )
    .then(() => {
      console.log("DB connected succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

import mongoose, { Schema, Document, Model } from 'mongoose';

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Define the URI for connecting to the MongoDB database
const mongoURI: string | undefined = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error("MONGO_URI environment variable is not defined");
}

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
});

// Define the TypeScript interface for the Feedback document
interface IFeedback extends Document {
  name: string;
  feedback: string;
}

// Create the Feedback schema
const feedbackSchema: Schema = new Schema({
  name: { type: String, required: true },
  feedback: { type: String, required: true },
});

// Create the Feedback model
const Feedback: Model<IFeedback> = mongoose.model<IFeedback>('Feedback', feedbackSchema);

export { Feedback };
